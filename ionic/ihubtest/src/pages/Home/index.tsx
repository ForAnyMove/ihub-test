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
// import docImage from '../ionic/ihubtest/images/vrach-wom.jpg';

const slideOpts1 = {
  initialSlide: 0,
  speed: 400
};
const a = true
let checkSlide =true;
const Home: React.FC = () => {
  return (
    
    <IonPage>
      <IonContent fullscreen>
          {/* slider witth doctor-info */}
          <IonSlides options={slideOpts1}>
      <IonSlide>
      <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Владимир Вселеченский</IonCardSubtitle>
            {/* <IonCardTitle><img src={docImage}></img></IonCardTitle> */}
          </IonCardHeader>
          <IonCardContent>
            <p>Длительность консультации</p>
            <p>50 минут</p>      </IonCardContent>
        </IonCard>
      </IonSlide>
      <IonSlide>
      <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Елена Шимановская</IonCardSubtitle>
            <IonCardTitle><img src="ionic/ihubtest/images/vrach-wom.jpg"></img></IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <div><p>Длительность консультации</p>
                <p>50 минут</p>
            </div>
      </IonCardContent>
        </IonCard>
      </IonSlide>
    </IonSlides>
    <Route component={a?FirstScreen:SecondScreen} />
    <div>
            <div>
              <span>Дата</span>
            </div>
            <div>
              <span>Время</span></div>
            <div>
              <IonButton expand="block" fill="outline">Записаться на бесплатную встречу</IonButton>
            </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
