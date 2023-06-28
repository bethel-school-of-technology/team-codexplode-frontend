import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar
} from '@ionic/react';
import BlankPage from '../components/BlankPage';
import './Restaurants.css';

const Restaurants: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Restaurants</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<BlankPage />
			</IonContent>
		</IonPage>
	);
};

export default Restaurants;
