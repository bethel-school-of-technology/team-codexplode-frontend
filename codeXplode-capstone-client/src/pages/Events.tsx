import {
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonIcon,
	IonPage,
	IonTitle,
	IonToolbar
} from '@ionic/react';
import { logOutOutline } from 'ionicons/icons';
import EventList from '../components/EventList';
import './Events.css';

const Events: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Events</IonTitle>
					<IonButtons slot='end'>
						<IonButton routerLink='/' routerDirection='root'>
							<IonIcon icon={logOutOutline}></IonIcon>
							Logout
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent className='ion-padding'>
				<IonButton routerLink='/app/about' expand='full'>
					What are we about!?
				</IonButton>
				<EventList />
			</IonContent>
		</IonPage>
	);
};

export default Events;
