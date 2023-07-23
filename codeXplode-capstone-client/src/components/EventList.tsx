import {
  IonList,
  IonListHeader,
  IonLabel,
  IonItemSliding,
  IonItem,
  IonCheckbox,
  IonItemOptions,
  IonItemOption,
  IonIcon,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonPage,
  IonContent,
} from '@ionic/react';
import { useContext, useEffect, useState } from 'react';
import { trash } from 'ionicons/icons';
import './EventList.css';
import { EventContext } from '../contexts/EventContext';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';

interface ContainerProps {}

const EventList: React.FC<ContainerProps> = () => {
  let { deleteEvent, editEvent, events } = useContext(EventContext);
  const [localUser, setLocalUser] = useState();

  const decodeJWT = (token: any) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

  useEffect(() => {
    console.log(events);
    async function fetch() {
      const token = localStorage.getItem('token');
      let user = await decodeJWT(token);
      setLocalUser(user.userId);
    }
    fetch();
  }, []);

  // const eventComplete = (event: any) => {
  //   editEvent({ ...event, completed: true })
  //     .then(() => {})
  //     .catch((error: any) => {
  //       console.log(error);
  //     });
  // };
  // const eventIncomplete = (event: any) => {
  //   editEvent({ ...event, completed: false })
  //     .then(() => {})
  //     .catch((error: any) => {
  //       console.log(error);
  //     });
  // };
  // const slideToDelete = (id: number) => {
  //   deleteEvent(id)
  //     .then(() => {})
  //     .catch((error: any) => {
  //       console.log(error);
  //     });
  // };

  const checkUser = (event: any) => {
    if (localUser === event.host?._id) {
      return (
        <div>
          <EditButton eventId={event._id} />
          <DeleteButton eventId={event._id} />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <IonList>
      {events.map((event: any) => {
        return (
          <IonCard key={event._id}>
            <img
              alt='Silhouette of mountains'
              src='https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Layered-Tortilla-Pie_exps5947_BS2282136A04_15_2b_RMS.jpg'
            />
            <IonCardHeader>
              <IonCardTitle>{event.title}</IonCardTitle>
              <IonCardSubtitle>{event.cuisine}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
              <p>{event.description}</p>
              <p>Meal: {event.meal}</p>
              <hr />
              {checkUser(event)}
            </IonCardContent>
          </IonCard>
        );
      })}
    </IonList>
  );
};

export default EventList;
