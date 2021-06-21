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
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import './styles.css';
import { logoApple, star } from 'ionicons/icons';
import FirstScreen from '../FirstScreen';
import SecondScreen from '../SecondScreen';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

type Item = {
  src: string;
  text: string;
};

const slideOpts1 = {
  initialSlide: 0,
  speed: 400
};

let dateOfReg = "26";
let timeOfReg = "18:30";

const Home: React.FC = () => {
  // cheked swipe slider for rerout content
  let [showSkip, setSkip] = React.useState(true);

  async function ionSlideChanged(event: CustomEvent) {
    const target = event.target as HTMLIonSlidesElement;
    setSkip(! await target.isEnd());
  }
  return (
    <IonPage>
      <IonContent scrollY={false}>
        {/* slider witth doctor-info */}
        <IonSlides
          options={slideOpts1}
          onIonSlideDidChange={ionSlideChanged}
        >
          <IonSlide>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Владимир Вселеченский</IonCardSubtitle>
                <IonCardTitle>
                  <IonImg className="doc-img" src='https://lh3.googleusercontent.com/pw/ACtC-3eYT2DmjVQueIFwcyO9re2Cr7fb6TlEqRBScHHE1dviG2G1SR5uXm8fa-86jDpFEpLfa9ruS42-g3aIQFZAk1McPzY7S5FjEPRYCBonWdFNbYDG8_kk6C9v6NzmHmYDpGPmIMfrK2t2FrIoqAQ5SElU=s288-no?authuser=0' />
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>Длительность консультации</p>
                <p>50 минут</p></IonCardContent>
            </IonCard>
          </IonSlide>
          <IonSlide>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Елена Шимановская</IonCardSubtitle>
                <IonCardTitle>
                  <IonImg className="doc-img" src='https://lh3.googleusercontent.com/pw/ACtC-3dQH5jAddC1k_wLTCR_NVNPP2_joGbmirBvL7kH4Afh5CMEwmtQJsBaf5B26T_-dT9hi_CXH2z3D5wqYBAeZfR_K6O-MuPcsGdG1ena4N4oi8L91Y65O_6jnzbr70VfVpaV2bVXaHlI-9KMvUU-JeZV=s288-no?authuser=0' />
                </IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                <div><p>Длительность консультации</p>
                  <p>50 минут</p>
                </div>
              </IonCardContent>
            </IonCard>
          </IonSlide>
        </IonSlides>
        {/* route one of screens */}
        <Route component={showSkip ? FirstScreen : SecondScreen} />
        <div>
          <div>
            <p>Дата</p>
            <p>{dateOfReg} {showSkip ? " мая" : " июня"}</p>
          </div>
          <div>
            <p>Время</p>
            <p>{timeOfReg}</p>
          </div>
          <div>
            <IonButton expand="block" fill="outline">Записаться на бесплатную встречу</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
