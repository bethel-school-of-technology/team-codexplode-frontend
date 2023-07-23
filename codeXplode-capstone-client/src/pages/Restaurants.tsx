import {
	IonContent,
	IonFab,
	IonFabButton,
	IonHeader,
	IonIcon,
	IonModal,
	IonPage,
	IonSearchbar,
	IonToolbar,
	isPlatform,
	useIonViewWillEnter
} from '@ionic/react';
import { useEffect, useState } from 'react';
import { getRecords } from '../utilities/yelp';

import styles from '../mstylesheets/Map.module.scss';

import { Map, Marker, Overlay } from 'pigeon-maps';
import { maptiler } from 'pigeon-maps/providers';

import { MapOverlay } from '../components/MapOverlay';
import { CurrentPosOverlay } from '../components/CurrentPosOverlay';
import { flashOffOutline, flashOutline, list } from 'ionicons/icons';

import RecordsStore from '../mdata/RecordsStore';
import { fetchRecords } from '../mdata/Selectors';
import { getLocation } from '../utilities/geo_tools';
import { ListModel } from '../components/ListModel';

const maptilerProvider = maptiler('d5JQJPLLuap8TkJJlTdJ', 'streets');

const Restaurants = () => {
	const web = isPlatform('web' || 'pwa' || 'mobileweb' || '');

	useIonViewWillEnter(() => {
		getRecords(currentPoint);
	});

	//Manually set location for presentation                           Cleveland Area
	const [currentPoint, setCurrentPoint] = useState({
		latitude: 41.485407,
		longitude: -81.797201
	});

	const [showCurrentPointInfo, setShowCurrentPointInfo] = useState(false);

	const records = RecordsStore.useState(fetchRecords);
	const center = RecordsStore.useState((s) => s.center);

	const [results, setResults] = useState(false);
	const [zoom, setZoom] = useState(14);

	const [searchTerm, setSearchTerm] = useState(false);
	const [moveMode, setMoveMode] = useState(false);

	const [showListModel, setShowListModel] = useState(false);

	useEffect(() => {
		const getData = async () => {
			await getRecords(currentPoint);
		};

		getData();
	}, [currentPoint]);

	useEffect(() => {
		return setResults([...records]);
	}, [records]);

	useEffect(() => {
		const search = searchTerm.toLowerCase();
		var searchResults = [];

		if (searchTerm !== '') {
			records.forEach((record) => {
				if (record.name.toLowerCase().includes(search)) {
					searchResults.push(records);
				}
			});

			setResults(searchResults);
		} else {
			setResults([...records]);
		}
	}, [searchTerm]);

	const showMarkerInfo = (e, index: any) => {
		const tempRecords = JSON.parse(JSON.stringify(results));

		setShowCurrentPointInfo(false);
		!tempRecords[index].showInfo &&
			tempRecords.forEach((tempRecord: any) => (tempRecord.showInfo = false));
		tempRecords[index].showInfo = !tempRecords[index].showInfo;

		setResults(tempRecords);
	};

	const hideMarkers = () => {
		const tempRecords = JSON.parse(JSON.stringify(results));
		tempRecords.forEach((tempRecord: any) => (tempRecord.showInfo = false));
		setResults(tempRecords);
		setShowCurrentPointInfo(false);
	};

	const handleMapClick = (e: any) => {
		const clickedPoint = e.latLng;
		setCurrentPoint({ latitude: clickedPoint[0], longitude: clickedPoint[1] });
		setMoveMode(false);
	};

	const handleShowCurrentPointInfo = () => {
		hideMarkers();
		setShowCurrentPointInfo(!showCurrentPointInfo);
	};

	return (
		<IonPage>
			<IonContent fullscreen>
				{center && center.latitude && center.longitude && results && (
					<>
						<div
							className={styles.overlaySearch}
							style={{ marginTop: web ? '0.5rem' : '3.5rem' }}>
							<IonSearchbar
								placeholder='Search plotted points'
								animated={true}
								value={searchTerm}
								onIonChange={(e) => setSearchTerm(e.target.value)}
							/>
						</div>

						<Map
							onClick={(e) => (moveMode ? handleMapClick(e) : hideMarkers(e))}
							defaultCenter={[center.latitude, center.longitude]}
							defaultZoom={zoom}
							provider={maptilerProvider}
							touchEvents={true}>
							<Marker
								onClick={handleShowCurrentPointInfo}
								color='red'
								width={50}
								anchor={
									currentPoint
										? [currentPoint.latitude, currentPoint.longitude]
										: [center.latitude, center.longitude]
								}
							/>

							{results.map((record, index) => {
								return (
									<Marker
										onClick={(e) => showMarkerInfo(e, index)}
										key={index}
										color='#3578e5'
										width={50}
										anchor={[record.latitude, record.longitude]}
									/>
								);
							})}

							{results.map((record, index) => {
								if (record.showInfo) {
									return (
										<Overlay
											key={index}
											anchor={[record.latitude, record.longitude]}
											offset={[95, 304]}>
											<MapOverlay record={record} />
										</Overlay>
									);
								}
							})}

							{showCurrentPointInfo && (
								<Overlay
									anchor={[currentPoint.latitude, currentPoint.longitude]}
									offset={[95, 153]}>
									<CurrentPointOverlay />
								</Overlay>
							)}
						</Map>

						<IonFab
							verticaal='bottom'
							horizontal='end'
							slot='fixed'
							onClick={() => setShowListModel(!showListModel)}>
							<IonFabButton>
								<IonIcon icon={list} />
							</IonFabButton>
						</IonFab>

						<IonModal
							isOpen={showListModel}
							onDidDismiss={() => setShowListModel(false)}
							swipeToClose={true}
							initialBreakpoint={0.6}
							breakpoints={[0, 0.6, 1]}
							backdropBreakpoint={0.6}>
							<ListModel
								hideModel={() => setShowListModel(false)}
								searchTerm={searchTerm}
								records={results}
							/>
						</IonModal>
					</>
				)}
			</IonContent>
		</IonPage>
	);
};

export default Restaurants;
