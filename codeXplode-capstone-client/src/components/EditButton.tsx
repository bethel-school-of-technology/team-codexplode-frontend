import { IonButton } from '@ionic/react';

interface ButtonProps {
    event: any;
}

const EditButton: React.FC<ButtonProps> = (event) => {
  const handleEdit = () => {
    console.log(event);
  };

  return <IonButton color='warning' expand='block' onClick={handleEdit}>Edit</IonButton>;
};

export default EditButton;