import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
  useIonModal,
  useIonRouter,
} from '@ionic/react';
import { search } from 'ionicons/icons';
import { useState, useContext, useEffect } from 'react';
import { EventContext } from '../contexts/EventContext';
import { useParams } from 'react-router';
import LocationModal from '../components/LocationModal';
import { OverlayEventDetail } from '@ionic/core';

interface iParams {
  eventId: string;
}

const EditForm: React.FC = () => {
  const { editEvent, getEvent } = useContext(EventContext);
  const { eventId } = useParams<iParams>();
  const navigation = useIonRouter();
  const [present, dismiss] = useIonModal(LocationModal, {
    onDismiss: (data: string, role: string) => dismiss(data, role),
  });

  const [event, setEvent] = useState({
    _id: '',
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

  function openModal() {
    present({
      onWillDismiss: (ev: CustomEvent<OverlayEventDetail>) => {
        if (ev.detail.role === 'confirm') {
          setEvent({ ...event, location: ev.detail.data });
        }
      },
    });
  }

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
          <IonButtons slot='start'>
            <IonBackButton />
          </IonButtons>
          <IonTitle className='ion-text-center'>Edit Event</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem>
            <IonLabel position='floating'>
              Event Title <IonText color='danger'>*</IonText>
            </IonLabel>
            <IonInput
              required
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
              required
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
              required
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
              required
              name='meal'
              onIonInput={handleChange}
              value={meal}
              placeholder='Fettucine Alfredo'
            />
          </IonItem>
          <IonItem>
            <IonInput
              label='Location'
              labelPlacement='floating'
              name='location'
              onIonInput={handleChange}
              value={location}
              placeholder='123 Boardfish Rd, New York, NY'
            />

            <IonButton color='medium' onClick={() => openModal()}>
              <IonIcon slot='icon-only' icon={search} />
            </IonButton>
          </IonItem>
          <IonItem>
            <IonLabel position='floating'>Image URL</IonLabel>
            <IonInput
              type='search'
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
        </IonList>
        <IonButton expand='block' onClick={() => submit()}>
          Submit
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default EditForm;
