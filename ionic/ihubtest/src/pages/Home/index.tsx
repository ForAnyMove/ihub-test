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
import { Redirect, Route, BrowserRouter as Router, } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import './styles.css';
import { logoApple, refresh, star } from 'ionicons/icons';
import FirstScreen from '../FirstScreen';
import SecondScreen from '../SecondScreen';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

import firebase from 'firebase/app';
import 'firebase/firestore';

const fireBase = require("firebase");
require("firebase/firestore");
const config = {
  apiKey: "AIzaSyBRm0fp3NaML-p9Wq9wecjOCfWs3NNwCHA",
  authDomain: "ihub-test-app.firebaseapp.com",
  projectId: "ihub-test-app",
  storageBucket: "ihub-test-app.appspot.com",
  messagingSenderId: "679386346201",
  appId: "1:679386346201:web:caea3e978dec70984084c8"
}

firebase.initializeApp(config)
let db = firebase.firestore();
let docRef = db.collection("Ok").doc("LA");
type Item = {
  src: string;
  text: string;
};


var docOfReg = true;

var dateOfReg = "26";
var timeOfReg = "18:00";

const invite = function () {
  docRef.get().then((doc) => {
    let fireInfoDTD = doc.data()

    console.log(fireInfoDTD)

  }).then(() => (console.log(docOfReg)));
}

invite();

const checkOfCheck = () => {
  const elDate = document.getElementsByClassName("cart-title");
  for (let i = 0; i < elDate.length; i++) {
    elDate[i].addEventListener("click", function () {
      dateOfReg = String(elDate[i].textContent)
      console.log(timeOfReg, dateOfReg);
    }, false);
  }
  const elTime = document.getElementsByClassName("slide-title");
  for (let i = 0; i < elTime.length; i++) {
    elTime[i].addEventListener("click", function () {
      timeOfReg = String(elTime[i].textContent);

      console.log(timeOfReg, dateOfReg);
    }, false);
  }
}


console.log(dateOfReg, timeOfReg, docOfReg)



const Home: React.FC = () => {

  const slideOpts1 = {
    initialSlide: 0,
    speed: 400
  };



  // hook-chek of swipe slider for rerout content 
  let [showSkip, setSkip] = React.useState(true);

  async function ionSlideChanged(event: CustomEvent) {
    const target = event.target as HTMLIonSlidesElement;
    setSkip(! await target.isEnd());
  }

  const fireGo = function () {

    db.collection("Ok").doc("LA").set({
      doctor: showSkip ? "Владимир" : "Елена",
      date: dateOfReg,
      time: timeOfReg
    })
  }
  return (
    <IonPage onClick={checkOfCheck}>
      <IonContent scrollY={false}>
        {/* slider witth doctor-info */}
        <IonSlides className="doc-slider"
          options={slideOpts1}
          onIonSlideDidChange={ionSlideChanged}
        >
          <IonSlide className="slide-in-slider">

            <div className="doc-name">Владимир Вселеченский</div>
            <div className="slide-wrapper">
              <div className="img-wrapper">
                <img className="doc-img" src='https://lh3.googleusercontent.com/pw/ACtC-3eYT2DmjVQueIFwcyO9re2Cr7fb6TlEqRBScHHE1dviG2G1SR5uXm8fa-86jDpFEpLfa9ruS42-g3aIQFZAk1McPzY7S5FjEPRYCBonWdFNbYDG8_kk6C9v6NzmHmYDpGPmIMfrK2t2FrIoqAQ5SElU=s288-no?authuser=0' />
              </div>

              <div className="session-time">
                <p>Длительность консультации</p>
                <p className="bold-p">50 минут</p>
              </div>
            </div>
          </IonSlide>
          <IonSlide className="slide-in-slider">

            <div className="doc-name">Елена Шимановская</div>
            <div className="slide-wrapper">
              <div className="img-wrapper">
                <img className="doc-img" src='https://lh3.googleusercontent.com/pw/ACtC-3dQH5jAddC1k_wLTCR_NVNPP2_joGbmirBvL7kH4Afh5CMEwmtQJsBaf5B26T_-dT9hi_CXH2z3D5wqYBAeZfR_K6O-MuPcsGdG1ena4N4oi8L91Y65O_6jnzbr70VfVpaV2bVXaHlI-9KMvUU-JeZV=s288-no?authuser=0' />
              </div>
              <div className="session-time">
                <p>Длительность консультации</p>
                <p className="bold-p">50 минут</p>
              </div>
            </div>
          </IonSlide>
        </IonSlides>
        {/* route one of screens */}

        <Route component={showSkip ? FirstScreen : SecondScreen} />
        <div className="result-content">
          <div className="only-content-block">
            <div className="content-block first">
              <p>Дата</p>
              <p className="dateID">{!showSkip ? "3 июня" : "26 мая"}</p>
            </div>
            <div className="content-block">
              <p>Время</p>
              <p className="timeID">
                {showSkip ? "18:00" : "10:00"}
              </p>
            </div>
          </div>
          <div>
            <IonButton className="button" onClick={fireGo} expand="block" fill="outline">Записаться на бесплатную встречу</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};


export default Home;

