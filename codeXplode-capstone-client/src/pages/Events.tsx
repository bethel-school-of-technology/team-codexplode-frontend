import {
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import { logOutOutline, add } from 'ionicons/icons';
import EventList from '../components/EventList';
import './Events.css';

const Events: React.FC = () => {
  const navigation = useIonRouter();
  const handleClick = () => {
    navigation.push('/app/events/new', 'forward', 'push');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Events</IonTitle>
          <IonButtons slot='end'>
            <IonButton routerLink='/' routerDirection='root'>
              <IonIcon icon={logOutOutline}></IonIcon>
              Logout
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonButton routerLink='/app/about' expand='full'>
          What are we about!
        </IonButton>
        <EventList />
        <IonFab slot='fixed' vertical='bottom' horizontal='end'>
          <IonFabButton onClick={() => handleClick()}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Events;
