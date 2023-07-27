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
				<IonTitle>content comming soon...</IonTitle>
				<RestaurantList />
			</IonContent>
		</IonPage>
	);
};

export default Restaurants;
