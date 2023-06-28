import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar
} from '@ionic/react';
import BlankPage from '../components/BlankPage';
import './Profile.css';

const Profile: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>User Profile</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<BlankPage />
			</IonContent>
		</IonPage>
	);
};

export default Profile;
