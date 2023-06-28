import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar
} from '@ionic/react';
import BlankPage from '../components/BlankPage';
import './Events.css';

const Events: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Events</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<BlankPage />
			</IonContent>
		</IonPage>
	);
};

export default Events;
