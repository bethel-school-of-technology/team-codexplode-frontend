import { IonButton } from '@ionic/react';

const EditButton: React.FC = () => {
  const handleEdit = () => {
    console.log('edit');
  };

  return <IonButton color='warning' expand='block' onClick={handleEdit}>Edit</IonButton>;
};

export default EditButton;