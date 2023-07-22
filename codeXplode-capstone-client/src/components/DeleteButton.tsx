import { IonButton, useIonRouter } from '@ionic/react';
import showConfirm from '../hooks/Confirm';
import { useContext } from 'react';
import { EventContext } from '../contexts/EventContext';

interface ButtonProps {
  eventId: any;
}

const DeleteButton: React.FC<ButtonProps> = ({ eventId }) => {
  const { deleteEvent } = useContext(EventContext);
  const navigation = useIonRouter();
  const handleDelete = () => {
    showConfirm('Confirm', 'Are you sure you want to delete this event?').then((confirmed) => {
      if (confirmed === true) {
        deleteEvent(eventId)
          .then(() => {
            navigation.push('/app/events', 'forward', 'replace');
          })
          .catch((error: any) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <IonButton color='danger' expand='block' onClick={handleDelete}>
      Delete
    </IonButton>
  );
};

export default DeleteButton;
