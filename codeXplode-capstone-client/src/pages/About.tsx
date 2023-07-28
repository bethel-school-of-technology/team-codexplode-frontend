//import React from 'react';
import { IonButtons, IonContent, IonHeader, IonImg, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
function About() {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar color="tertiary">
            <IonTitle><img alt="MENU" id="header_logo" height="40" float-left src="C:\Users\bethe\Team_CodeXplode_Project\team-codexplode-frontend\codeXplode-capstone-client\resources\icon.png"></img>
			</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">This is the menu content.</IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>About</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
		<IonImg alt="" src= "C:\Users\bethe\Team_CodeXplode_Project\team-codexplode-frontend\codeXplode-capstone-client\resources\icon.png" />
		<h1>Hey There Foodies!</h1>
		<p>"A social platform to build connections between people through the wonderful medium of foods"</p>
		<p>Food is a great connector, Come, Let's build beautiful community through foods!</p>
        
		</IonContent>
      </IonPage>
    </>
  );
}
export default About;