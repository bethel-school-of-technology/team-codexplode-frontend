import Autocomplete from 'react-google-autocomplete';
import React, { useState, useRef } from 'react';
import {
  IonButtons,
  IonButton,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonItem,
  IonInput,
  IonSearchbar,
} from '@ionic/react';

const LocationModal = ({
  onDismiss,
}: {
  onDismiss: (data?: string | null | undefined | number, role?: string) => void;
}) => {
  let inputRef = useRef<HTMLInputElement>(null);
  //   const { ref } = usePlacesWidget({
  //     apiKey: 'AIzaSyAvwYNaDPy3-urFPkAEf6Qt-Dg_OIkfLps',
  //     onPlaceSelected: (place) => {
  //       inputRef.current!.value = place;
  //     },
  //     options: {
  //       types: ['address'],
  //       componentRestrictions: { country: 'us' },
  //     },
  //   });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonButton color='medium' onClick={() => onDismiss(null, 'cancel')}>
              Cancel
            </IonButton>
          </IonButtons>
          <IonTitle>Welcome</IonTitle>
          <IonButtons slot='end'>
            <IonButton onClick={() => onDismiss(inputRef.current?.value, 'confirm')} strong={true}>
              Confirm
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <Autocomplete
          apiKey='AIzaSyAvwYNaDPy3-urFPkAEf6Qt-Dg_OIkfLps'
          style={{ width: '90%' }}
          options={{
            types: ['address'],
            componentRestrictions: { country: 'us' },
          }}
          placeholder='Search for a place'
          ref={inputRef}
        />
      </IonContent>
    </IonPage>
  );
};

export default LocationModal;
