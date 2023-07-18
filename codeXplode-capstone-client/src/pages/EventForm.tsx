import {
  IonButton,
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
  useIonRouter,
} from '@ionic/react';
import { useState, useContext } from 'react';
import { EventContext } from '../contexts/EventContext';

const EventForm: React.FC = () => {
  let { addEvent } = useContext(EventContext);
  const navigation = useIonRouter();

  const [event, setEvent] = useState({
    host: '',
    title: '',
    description: '',
    cuisine: '',
    meal: '',
    location: '',
    mediaCardUrl: '',
    when: '',
  });

  let { title, description, cuisine, meal, location, mediaCardUrl, when } = event;

  const submit = () => {
    console.log(event);
    addEvent(event)
      .then(() => {
        navigation.push('/app/events', 'forward', 'replace');
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const handleChange = (ev: any) => {
    setEvent({ ...event, [ev.target.name]: ev.target.value });
  };

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
            <IonInput
              name='title'
              onIonInput={handleChange}
              value={title}
              placeholder="Tim's Burgers"
            />
          </IonItem>
          <IonItem>
            <IonLabel position='floating'>
              Description <IonText color='danger'>*</IonText>
            </IonLabel>
            <IonInput
              name='description'
              onIonInput={handleChange}
              value={description}
              placeholder='This is a description...'
            />
          </IonItem>
          <IonItem>
            <IonLabel position='floating'>
              Cuisine <IonText color='danger'>*</IonText>
            </IonLabel>
            <IonInput
              name='cuisine'
              onIonInput={handleChange}
              value={cuisine}
              placeholder='Italian'
            />
          </IonItem>
          <IonItem>
            <IonLabel position='floating'>
              Meal <IonText color='danger'>*</IonText>
            </IonLabel>
            <IonInput
              name='meal'
              onIonInput={handleChange}
              value={meal}
              placeholder='Fettucine Alfredo'
            />
          </IonItem>
          <IonItem>
            <IonLabel position='floating'>Location</IonLabel>
            <IonInput
              name='location'
              onIonInput={handleChange}
              value={location}
              placeholder='123 Boardfish Rd, New York, NY'
            />
          </IonItem>
          <IonItem>
            <IonLabel position='floating'>Image URL</IonLabel>
            <IonInput
              type='url'
              name='mediaCardUrl'
              onIonInput={handleChange}
              value={mediaCardUrl}
              placeholder='unsplash.com/randomimage'
            />
          </IonItem>
          <IonItem>
            <IonLabel position='floating'>
              When <IonText color='danger'>*</IonText>
            </IonLabel>
            <IonInput
              name='when'
              onIonInput={handleChange}
              value={when}
              placeholder='2022-01-01'></IonInput>
          </IonItem>
          <hr />
          <IonButton expand='block' onClick={() => submit()}>
            Submit
          </IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default EventForm;
