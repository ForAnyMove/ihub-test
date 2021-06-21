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
import Login from '.';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';

const slideOpts2 = {
  initialSlide: 0,
  slidesPerView: 4.5,
  spaceBetween: 0,
  speed: 400
};
const slideOpts3 = {
  initialSlide: 0,
  slidesPerView: 3.5,
  spaceBetween: 0,
  speed: 400
};

const Home: React.FC = () => {
  return (
    
      <IonContent scrollY={false}>
      <p>Возможная дата</p>
    {/* slider with dates */}
    <IonSlides options={slideOpts2}>
      <IonSlide>
      <IonCard button={true} class="ioncardclass">
          <IonCardHeader>
            <IonCardSubtitle class="cart-subtitle">Сегодня</IonCardSubtitle>
            <IonCardTitle class="cart-title">26</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonSlide>
      <IonSlide>
      <IonCard button={true} class="ioncardclass">
          <IonCardHeader>
            <IonCardSubtitle class="cart-subtitle">Ср</IonCardSubtitle>
            <IonCardTitle class="cart-title">27</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonSlide>
      <IonSlide>
      <IonCard button={true} class="ioncardclass">
          <IonCardHeader>
            <IonCardSubtitle class="cart-subtitle">Ср</IonCardSubtitle>
            <IonCardTitle class="cart-title">28</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonSlide>
      <IonSlide>
      <IonCard button={true} class="ioncardclass">
          <IonCardHeader>
            <IonCardSubtitle class="cart-subtitle">Ср</IonCardSubtitle>
            <IonCardTitle class="cart-title">29</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonSlide>
      <IonSlide>
      <IonCard button={true} class="ioncardclass">
          <IonCardHeader>
            <IonCardSubtitle class="cart-subtitle">Ср</IonCardSubtitle>
            <IonCardTitle class="cart-title">30</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonSlide>
      <IonSlide>
      <IonCard button={true} class="ioncardclass">
          <IonCardHeader>
            <IonCardSubtitle  class="cart-subtitle">Ср</IonCardSubtitle>
            <IonCardTitle class="cart-title">31</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonSlide>
    </IonSlides>
    <p>Свободное время</p>
    {/* slider with time */}
    <IonSlides options={slideOpts3}>
      <IonSlide class="slide-title">
              <div>18:00</div>
            </IonSlide>
      <IonSlide class="slide-title">
              <div>18:30</div>
            </IonSlide>
      <IonSlide class="slide-title">
          <div>20:00</div>
      </IonSlide>
      <IonSlide class="slide-title">
     <div>20:30</div>
      </IonSlide>
    </IonSlides>
      </IonContent>
  );
};

export default Home;