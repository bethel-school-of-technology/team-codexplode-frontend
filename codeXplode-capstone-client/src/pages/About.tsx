import {
	IonButtons,
	IonContent,
	IonHeader,
	IonMenuButton,
	IonPage,
	IonTitle,
	IonToolbar,
	IonCard,
	IonBackButton,
	IonButton,
	IonIcon
} from '@ionic/react';
import { caretBackCircleOutline, logOutOutline } from 'ionicons/icons';

const About: React.FC = () => {
	return (
		<IonPage>
			<IonHeader>
				<IonToolbar color={'primary'}>
					<IonTitle>Our Story</IonTitle>
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
				<div id='container'>
					<h1>Hey There Foodies!</h1>
					<p>
						"A social platform to build connections between people through the wonderful medium of
						foods"
					</p>
					<p>Food is a great connector, Come!, Let's build beautiful community through foods!</p>
				</div>
			</IonContent>
		</IonPage>
	);
};
export default About;
