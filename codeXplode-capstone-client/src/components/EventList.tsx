import {
	IonList,
	IonCard,
	IonCardContent,
	IonCardHeader,
	IonCardTitle,
	IonCardSubtitle,
	IonButton,
	useIonModal,
	IonGrid,
	IonRow,
	IonCol,
	IonText,
	IonIcon,
	IonActionSheet,
	useIonRouter
} from '@ionic/react';
import { useContext, useEffect, useState } from 'react';
import './EventList.css';
import { EventContext } from '../contexts/EventContext';
import ExampleCards from './ExampleCards';
import EventDetailsModal from './EventDetailsModal';
import { options } from 'ionicons/icons';
import showConfirm from '../hooks/Confirm';

interface ContainerProps {}

const EventList: React.FC<ContainerProps> = () => {
	let { events, deleteEvent } = useContext(EventContext);
	const navigation = useIonRouter();
	const [localUser, setLocalUser] = useState();
	const [currentModalDetails, setCurrentModalDetails] = useState();
	const [present, dismiss] = useIonModal(EventDetailsModal, {
		onDismiss: () => dismiss(),
		event: currentModalDetails
	});

	function handleModal(event: any) {
		setCurrentModalDetails(event);
		present();
	}

	function handleDelete(eventId: string) {
		showConfirm('Confirm', 'Are you sure you want to delete this event?').then((confirmed) => {
			if (confirmed === true) {
				deleteEvent(eventId)
					.then(() => {
						navigation.push('/app/events', 'forward', 'replace');
					})
					.catch((error: any) => {
						console.log(error);
					});
			}
		});
	}

	const decodeJWT = (token: any) => {
		try {
			return JSON.parse(atob(token.split('.')[1]));
		} catch (e) {
			return null;
		}
	};

	useEffect(() => {
		console.log(events);
		async function fetch() {
			const token = localStorage.getItem('token');
			let user = await decodeJWT(token);
			setLocalUser(user.userId);
		}
		fetch();
	}, []);

	const checkUser = (event: any) => {
		if (localUser === event.host?._id) {
			return (
				<IonGrid className='ion-no-padding ion-no-margin'>
					<IonRow>
						<IonCol sizeXs='6'>
							<IonButton
								expand='full'
								className='ion-no-margin'
								color='primary'
								onClick={() => handleModal(event)}>
								Details
							</IonButton>
						</IonCol>
						<IonCol sizeXs='6'>
							<IonButton
								id='open-action-sheet'
								expand='full'
								color='medium'
								onClick={() => console.log('Options button pressed. ')}>
								<IonIcon slot='icon-only' icon={options} />
							</IonButton>
							<IonActionSheet
								trigger='open-action-sheet'
								header='Actions'
								buttons={[
									{
										text: 'Delete',
										role: 'destructive',
										data: {
											action: 'delete'
										},
										handler: () => {
											handleDelete(event._id);
										}
									},
									{
										text: 'Edit',
										data: {
											action: 'edit'
										},
										handler: () => {
											console.log('Edit routing issued for event:', event._id);
											navigation.push(`/app/events/${event._id}`, 'forward', 'push');
										}
									},
									{
										text: 'Cancel',
										role: 'cancel',
										data: {
											action: 'cancel'
										}
									}
								]}
							/>
						</IonCol>
					</IonRow>
				</IonGrid>
			);
		} else {
			return (
				<IonGrid>
					<IonCol sizeXs='12'>
						<IonButton expand='full' color='primary' onClick={() => handleModal(event)}>
							Details
						</IonButton>
					</IonCol>
				</IonGrid>
			);
		}
	};

	return (
		<IonList>
			<ExampleCards />
			{events.map((event: any) => {
				return (
					<IonCard key={event._id}>
						<img
							alt='Silhouette of mountains'
							src={
								event.mediaCardUrl ||
								'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Layered-Tortilla-Pie_exps5947_BS2282136A04_15_2b_RMS.jpg'
							}
						/>
						<IonCardHeader>
							<IonCardTitle className='ion-text-center'>{event.title}</IonCardTitle>
							<IonCardSubtitle>
								<IonGrid>
									<IonRow>
										<IonCol>
											<IonText>{event.cuisine} Cuisine</IonText>
										</IonCol>
										<IonCol className='ion-text-end'>
											<IonText color='primary'>
												@{event.host?.firstName} {event.host?.lastName}
											</IonText>
										</IonCol>
									</IonRow>
								</IonGrid>
							</IonCardSubtitle>
						</IonCardHeader>
						<IonCardContent className='ion-text-center'>
							Main Course: <IonText color='primary'>{event.meal}</IonText>
							{checkUser(event)}
						</IonCardContent>
					</IonCard>
				);
			})}
		</IonList>
	);
};

export default EventList;
