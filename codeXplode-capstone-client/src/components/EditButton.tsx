import { IonButton, useIonRouter } from '@ionic/react';

interface ButtonProps {
    eventId: string;
}

const EditButton: React.FC<ButtonProps> = ({ eventId }) => {
    const navigation = useIonRouter();
  const handleEdit = () => {
    navigation.push(`/edit/${eventId}`, 'forward', 'replace');
  };

  return <IonButton color='warning' expand='block' onClick={handleEdit}>Edit</IonButton>;
};

export default EditButton;