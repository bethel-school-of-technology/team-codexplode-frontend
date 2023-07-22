import { IonButton } from '@ionic/react';

const DeleteButton: React.FC = () => {
  const handleDelete = () => {
    console.log('delete');
  };

  return <IonButton color='danger' expand='block' onClick={handleDelete}>Delete</IonButton>;
};

export default DeleteButton;