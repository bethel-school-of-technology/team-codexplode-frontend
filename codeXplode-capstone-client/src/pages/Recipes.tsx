import {
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonIcon,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar
} from '@ionic/react';
import BlankPage from '../components/BlankPage';
import { calendarOutline, caretBackCircleOutline, logOutOutline } from 'ionicons/icons';

const Recipes: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color={'primary'}>
					<IonButtons slot='start'>
						<IonButton routerLink='/app/events' routerDirection='root'>
							<IonIcon icon={caretBackCircleOutline}></IonIcon>
							events
						</IonButton>
					</IonButtons>
					<IonTitle>Recipes</IonTitle>
					<IonButtons slot='end'>
						<IonButton routerLink='/' routerDirection='root'>
							<IonIcon icon={logOutOutline}></IonIcon>
							Logout
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent className='ion-padding'>
				<BlankPage />
				<h1>Build Recipe sharing APi here</h1>
			</IonContent>
		</IonPage>
	);
};

export default Recipes;
