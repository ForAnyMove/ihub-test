import React, { useState} from 'react';
import {
   IonButton,
   IonIcon,
   IonContent,
   IonHeader,
   IonPage,
   IonTitle,
   IonToolbar,
   IonSlides,
   IonSlide,
   IonImg,
   IonCard,
   IonCardHeader,
   IonCardSubtitle,
   IonCardTitle,
   IonCardContent,
   IonItem,
   IonLabel,
   IonList,
   IonThumbnail,
 } from '@ionic/react';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import { useSCollection} from 'react-firebase-hooks/firestore';

export default function ItemList(){
   const [value, loading, error] = useSCollection(
   firebase.firestore().collection("items").orderBy("createOn", "desc"),
   {
      snapshotListenOptions:{includeMetadataChanges: true}
   }
   );
}
