import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar
} from '@ionic/react';
import BlankPage from '../components/BlankPage';
import './Reviews.css';

const Reviews: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Reviews</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<BlankPage />
			</IonContent>
		</IonPage>
	);
};

export default Reviews;
