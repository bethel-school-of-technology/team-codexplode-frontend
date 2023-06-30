import {
	IonButton,
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
	useIonRouter
} from '@ionic/react';
import BlankPage from '../components/BlankPage';
import './Login.css';

const Login: React.FC = () => {
	const navigation = useIonRouter();

	const userLogin = () => {
		navigation.push('/app', 'forward', 'replace');
	};

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonButtons slot='start'>
						<IonMenuButton></IonMenuButton>
					</IonButtons>
					<IonTitle>Hello!</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent className='ion-padding'>
				<IonButton onClick={() => userLogin()}>login</IonButton>
			</IonContent>
		</IonPage>
	);
};

export default Login;
