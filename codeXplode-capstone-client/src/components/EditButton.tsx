import { IonButton } from '@ionic/react';

interface ButtonProps {
    eventId: string;
}

const EditButton: React.FC<ButtonProps> = ({ eventId }) => {
  const handleEdit = () => {
    console.log(eventId);
  };

  return <IonButton color='warning' expand='block' onClick={handleEdit}>Edit</IonButton>;
};

export default EditButton;