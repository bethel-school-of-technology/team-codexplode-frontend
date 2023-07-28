import {
  IonButtons,
  IonButton,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonItemDivider,
  IonLabel,
} from '@ionic/react';
import { Event } from '../contexts/EventContext';

type Props = {
  onDismiss: () => void;
  event: Event;
};

const EventDetailsModal: React.FC<Props> = ({ onDismiss, event }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonButton color='medium' onClick={onDismiss}>
              Back
            </IonButton>
          </IonButtons>
          <IonTitle>{event.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonGrid>
          <IonRow className='ion-justify-content-center ion-margin-bottom'>
            <IonCol>
              <IonImg src={event.mediaCardUrl} />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItemDivider>
                <IonLabel color='primary'>Event Host</IonLabel>
              </IonItemDivider>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              {event.host.firstName} {event.host.lastName}
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItemDivider>
                <IonLabel color='primary'>Event Description</IonLabel>
              </IonItemDivider>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>{event.description}</IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItemDivider>
                <IonLabel color='primary'>General Info</IonLabel>
              </IonItemDivider>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText>
                <b>Cuisine: </b>
                {event.cuisine}
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText>
                <b>Meal: </b>
                {event.meal}
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText>
                <b>When: </b>
                {event.when}
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonText>
                <b>Where: </b>
                {event.location}
              </IonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default EventDetailsModal;
