import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/react';

const ExampleCards: React.FC = () => {
  return (
    <>
      <IonCard>
        <img
          alt='BBQ Ribs'
          src='https://simply-delicious-food.com/wp-content/uploads/2020/06/Sticky-BBQ-ribs-4.jpg'
        />
        <IonCardHeader>
          <IonCardTitle>Barbecue Ribs</IonCardTitle>
          <IonCardSubtitle>American Cuisine</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          Cooked long, slow, and at a low temperature. This American classic plate is a must.
        </IonCardContent>
      </IonCard>
      <IonCard>
        <img
          alt='Masala Dosa'
          src='https://static01.nyt.com/images/2015/01/28/dining/28KITCHEN1/28KITCHEN1-articleLarge.jpg?w=1280&q=75'
        />
        <IonCardHeader>
          <IonCardTitle>Masala Dosa</IonCardTitle>
          <IonCardSubtitle>Indian Cuisine</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          Crispy rice and lentil crepes stuffed with spiced and savory potato filling. This is a
          popular breakfast snack.
        </IonCardContent>
      </IonCard>
      <IonCard>
        <img
          alt='Esquite'
          src='https://lilluna.com/wp-content/uploads/2020/12/esquites-resize-13.jpg'
        />
        <IonCardHeader>
          <IonCardTitle>Esquites</IonCardTitle>
          <IonCardSubtitle>Mexican Cuisine</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          Corn served in a cup with chili powder, mayonnaise, cilantro, and queso fresco. A fun
          snack to share.
        </IonCardContent>
      </IonCard>
      <IonCard>
        <img
          alt='Cassava Cake'
          src='https://simplybakings.com/wp-content/uploads/2019/12/Cassava-Cake-3-1.jpg'
        />
        <IonCardHeader>
          <IonCardTitle>Cassava Cake</IonCardTitle>
          <IonCardSubtitle>Filipino Cuisine</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          A popular dessert crafted from freshly grated cassava flour and coconut milk baked on
          coals. A traditional cake to share during gatherings.{' '}
        </IonCardContent>
      </IonCard>
      <IonCard>
        <img
          alt='Pani Popo'
          src='https://i0.wp.com/tarasmulticulturaltable.com/wp-content/uploads/2013/03/Pani-Popo-Samoan-Sweet-Coconut-Buns-9-of-9.jpg?resize=768%2C512&ssl=1'
        />
        <IonCardHeader>
          <IonCardTitle>Pani Popo</IonCardTitle>
          <IonCardSubtitle>Samoan Cuisine</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          Coconut buns that are light, fluffy yeast rolls soaked in a sweet coconut syrup. A
          delicious treat!
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default ExampleCards;