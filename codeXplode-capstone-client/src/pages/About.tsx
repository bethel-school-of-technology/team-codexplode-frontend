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
import './About.css';
import { caretBackCircleOutline } from 'ionicons/icons';

const About: React.FC = () => {
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
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
			<IonContent className='ion-padding'>
				<IonCard>
					<img
						alt=''
						src='/../../resources/icon.png'
					/>
				</IonCard>
				<div id='container'>
					<h1>Hey There, Foodies!</h1>
					<p>
						"A social platform to build connections between people through the
						wonderful medium of foods."
					</p>
					<p>
						Food is a great connector! Come! Let's build beautiful community
						through foods!
					</p>
				</div>
			</IonContent>
		</IonPage>
	);
};
export default About;
