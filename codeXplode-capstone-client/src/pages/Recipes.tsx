import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import BlankPage from '../components/BlankPage';
import './Recipes.css';
import { calendarOutline, caretBackCircleOutline } from 'ionicons/icons';

const Recipes: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonButtons slot='start'>
            <IonButton routerLink='/app/events' routerDirection='root'>
              <IonIcon icon={caretBackCircleOutline}></IonIcon>
              events
            </IonButton>
          </IonButtons>
          <IonTitle>Recipes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonCard>
          <img
            alt='Silhouette of mountains'
            src='https://plus.unsplash.com/premium_photo-1684923610122-028894099cdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
          />
          <IonCardHeader>
            <IonCardTitle>Home-cooked Burgers</IonCardTitle>
            <IonCardSubtitle>American</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            Ground chuck – We prefer an 80 lean/20 fat ratio for the juiciest burgers. Crushed
            crackers or Panko bread crumbs – The best binders for juicy hamburgers. (Could be
            gluten-free!) Worcestershire sauce – Adds a deep beefy, smoky flavor. Egg – To bind all
            of the ingredients together without drying. Milk – The enzymes help to soften and
            tenderize the ground beef. Seasonings: Salt, Garlic Powder, Onion powder, Pepper, or
            other spices of choice.
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Recipes;
