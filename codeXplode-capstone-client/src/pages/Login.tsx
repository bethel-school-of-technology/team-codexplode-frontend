import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar
} from '@ionic/react';
import BlankPage from '../components/BlankPage';
import './Login.css';

const Login: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Login/Sign up</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<BlankPage />
			</IonContent>
		</IonPage>
	);
};

export default Login;
