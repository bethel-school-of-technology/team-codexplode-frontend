import { IonButton, useIonRouter } from '@ionic/react';

interface ButtonProps {
  eventId: any;
}

const EditButton: React.FC<ButtonProps> = ({ eventId }) => {
  const navigation = useIonRouter();
  const handleEdit = () => {
    navigation.push(`/app/events/${eventId}`, 'forward', 'push');
  };

  return (
    <IonButton expand='full' color='warning' onClick={handleEdit}>
      Edit
    </IonButton>
  );
};

export default EditButton;
