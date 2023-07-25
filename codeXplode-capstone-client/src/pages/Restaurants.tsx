import {
	IonButton,
	IonButtons,
	IonChip,
	IonContent,
	IonHeader,
	IonIcon,
	IonLabel,
	IonPage,
	IonTitle,
	IonToolbar
} from '@ionic/react';
import { caretBackCircleOutline, logOutOutline } from 'ionicons/icons';
import './Events.css';
import RestaurantList from '../components/RestaurantList';
import BlankPage from '../components/BlankPage';

const Restaurants: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color={'primary'}>
					<IonTitle>Restaurants</IonTitle>
					<IonButtons slot='start'>
						<IonButton routerLink='/app/events' routerDirection='root'>
							<IonIcon icon={caretBackCircleOutline}></IonIcon>
							events
						</IonButton>
					</IonButtons>
					<IonButtons slot='end'>
						<IonButton routerLink='/' routerDirection='root'>
							<IonIcon icon={logOutOutline}></IonIcon>
							Logout
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent className='ion-padding'>
				{/* <IonButton routerLink='/app/about' expand='full'>
					What are we about!
				</IonButton> */}
				{/* <RestaurantList /> */}
				<BlankPage />
			</IonContent>
		</IonPage>
	);
};

export default Restaurants;

// import {
// 	IonButton,
// 	IonButtons,
// 	IonContent,
// 	IonHeader,
// 	IonIcon,
// 	IonItem,
// 	IonLabel,
// 	IonMenuButton,
// 	IonPage,
// 	IonSearchbar,
// 	IonSelect,
// 	IonSelectOption,
// 	IonTitle,
// 	IonToolbar
// } from '@ionic/react';
// import './Restaurants.css';
// import { caretBackCircleOutline, logOutOutline } from 'ionicons/icons';
// import YelpApi, { SearchType } from '../hooks/YelpApi';
// import { useEffect, useState } from 'react';

// const Restaurants: React.FC = () => {
// 	const { searchData } = YelpApi();

// 	const [yelpSearch, setYelpSearch] = useState('');
// 	const [type, setType] = useState<SearchType>(SearchType.all);
// 	const [results, setResults] = useState([]);

// 	useEffect(() => {
// 		if (yelpSearch === '') {
// 			setResults([]);
// 			return;
// 		}
// 		const loadResults = async () => {
// 			const result = await searchData(yelpSearch, type);
// 			setResults(result);
// 		};
// 	}, [yelpSearch]);

// 	return (
// 		<IonPage>
// 			<IonHeader>
// 				<IonToolbar color={'primary'}>
// 					<IonButtons slot='start'>
// 						<IonButton routerLink='/app/events' routerDirection='root'>
// 							<IonIcon icon={caretBackCircleOutline}></IonIcon>
// 							events
// 						</IonButton>
// 					</IonButtons>
// 					<IonTitle>Restaurants</IonTitle>
// 				</IonToolbar>
// 			</IonHeader>
// 			<IonSearchbar
// 				value={yelpSearch}
// 				debounce={300}
// 				onIonChange={(e) => setYelpSearch(e.detail.value!)}></IonSearchbar>
// 			<IonItem>
// 				<IonLabel>Select Search Type</IonLabel>
// 				<IonSelect value={type} onIonChange={(e) => setType(e.detail.value!)}>
// 					<IonSelectOption value=''>All</IonSelectOption>
// 					<IonSelectOption value='categories'>Cuisine</IonSelectOption>
// 					<IonSelectOption value='rating'>Ratings</IonSelectOption>
// 					<IonSelectOption value='distance'>Distance</IonSelectOption>
// 				</IonSelect>
// 			</IonItem>
// 			<IonContent className='ion-padding'>
// 				<IonTitle>Yelp Reviews coming!</IonTitle>
// 			</IonContent>
// 		</IonPage>
// 	);
// };

// export default Restaurants;
