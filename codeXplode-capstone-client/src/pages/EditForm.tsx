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
import { useState, useContext, useEffect } from 'react';
import { EventContext } from '../contexts/EventContext';
import { useParams } from 'react-router';

const EditForm: React.FC = () => {
  const { editEvent, getEvent } = useContext(EventContext);
  const { eventId } = useParams<any>();
  const navigation = useIonRouter();

  const [event, setEvent] = useState({
    _id: 0,
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

  useEffect(() => {
    async function fetch() {
      await getEvent(eventId).then((res) =>
        setEvent({
          _id: eventId,
          host: res.host._id,
          title: res.title,
          description: res.description,
          cuisine: res.cuisine,
          meal: res.meal,
          location: res.location ? res.location : '',
          mediaCardUrl: res.mediaCardUrl ? res.mediaCardUrl : '',
          when: res.when,
        })
      );
    }
    fetch();
  }, []);

  const submit = () => {
    console.log(event);
    editEvent(event)
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
          <IonTitle className='ion-text-center'>Edit Event</IonTitle>
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

export default EditForm;