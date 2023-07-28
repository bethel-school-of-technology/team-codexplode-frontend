import { IonButton, useIonRouter } from '@ionic/react';

interface ButtonProps {
    eventId: any;
}

const EditButton: React.FC<ButtonProps> = ({ eventId }) => {
    const navigation = useIonRouter();
  const handleEdit = () => {
    navigation.push(`/app/events/${eventId}`, 'forward', 'push');
  };

  return <IonButton color='warning' expand='block' onClick={handleEdit}>Edit</IonButton>;
};

export default EditButton;