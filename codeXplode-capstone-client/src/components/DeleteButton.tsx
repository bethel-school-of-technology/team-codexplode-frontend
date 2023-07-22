import { IonButton } from '@ionic/react';
import showConfirm from '../hooks/Confirm';

const DeleteButton: React.FC = () => {
  const handleDelete = () => {
    showConfirm('Confirm', 'Are you sure you want to delete this event?').then((confirmed) => {
      console.log('Confirmed:', confirmed);
    });
  };

  return <IonButton color='danger' expand='block' onClick={handleDelete}>Delete</IonButton>;
};

export default DeleteButton;