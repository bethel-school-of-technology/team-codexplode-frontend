import {
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useState, useContext } from 'react';
import {EventContext} from "../contexts/EventContext";

const EventForm: React.FC = () => {
  let { addEvent } = useContext(EventContext);

  const [event, setEvent] = useState({
    host: '',
    title: '',
    description: '',
    cuisine: '',
    meal: '',
    location: '',
    participants: '',  
  });

  const slideToDelete = (event: any) => {
		addEvent(event)
			.then(() => {
        // TODO redirect to the list or detail
      })
			.catch((error: any) => {
				console.log(error);
			});
	};

  // TODO onChangeItem() 

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle className='ion-text-center'>New Event</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='ion-padding'>
        <IonList>
          <IonItem>
            <IonLabel position='floating'>
              Event Title <IonText color='danger'>*</IonText>
            </IonLabel>
            <IonInput placeholder="Tim's Burgers" />
          </IonItem>
          <IonItem>
            <IonLabel position='floating'>
              Description <IonText color='danger'>*</IonText>
            </IonLabel>
            <IonInput placeholder='This is a description...' />
          </IonItem>
          <IonItem>
            <IonLabel position='floating'>
              Cuisine <IonText color='danger'>*</IonText>
            </IonLabel>
            <IonInput placeholder='Italian' />
          </IonItem>
          <IonItem>
            <IonLabel position='floating'>
              Meal <IonText color='danger'>*</IonText>
            </IonLabel>
            <IonInput placeholder='Fettucine Alfredo' />
          </IonItem>
          <IonItem>
            <IonLabel position='floating'>Location</IonLabel>
            <IonInput placeholder='123 Boardfish Rd, New York, NY' />
          </IonItem>
          <IonItem>
            <IonLabel position='floating'>Image URL</IonLabel>
            <IonInput placeholder='unsplash.com/randomimage' />
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default EventForm;
