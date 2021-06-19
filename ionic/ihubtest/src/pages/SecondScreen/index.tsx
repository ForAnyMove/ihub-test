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
    
      <IonContent fullscreen>
      <p>Возможная дата</p>
    {/* slider with dates */}
    <IonSlides options={slideOpts2}>
      <IonSlide>
      <IonCard button={true} class="ioncardclass">
          <IonCardHeader>
            <IonCardSubtitle class="cart-subtitle">Сегодня</IonCardSubtitle>
            <IonCardTitle class="cart-title">3</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonSlide>
      <IonSlide>
      <IonCard button={true} class="ioncardclass">
          <IonCardHeader>
            <IonCardSubtitle class="cart-subtitle">Ср</IonCardSubtitle>
            <IonCardTitle class="cart-title">4</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonSlide>
      <IonSlide>
      <IonCard button={true} class="ioncardclass">
          <IonCardHeader>
            <IonCardSubtitle class="cart-subtitle">Чт</IonCardSubtitle>
            <IonCardTitle class="cart-title">5</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonSlide>
      <IonSlide>
      <IonCard button={true} class="ioncardclass">
          <IonCardHeader>
            <IonCardSubtitle class="cart-subtitle">Пт</IonCardSubtitle>
            <IonCardTitle class="cart-title">6</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonSlide>
      <IonSlide>
      <IonCard button={true} class="ioncardclass">
          <IonCardHeader>
            <IonCardSubtitle class="cart-subtitle">Пн</IonCardSubtitle>
            <IonCardTitle class="cart-title">9</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonSlide>
      <IonSlide>
      <IonCard button={true} class="ioncardclass">
          <IonCardHeader>
            <IonCardSubtitle  class="cart-subtitle">Вт</IonCardSubtitle>
            <IonCardTitle class="cart-title">10</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonSlide>
    </IonSlides>
    <p>Свободное время</p>
    {/* slider with time */}
    <IonSlides options={slideOpts3}>
      <IonSlide class="slide-title">
              <div>9:00</div>
            </IonSlide>
      <IonSlide class="slide-title">
              <div>10:00</div>
            </IonSlide>
      <IonSlide class="slide-title">
          <div>11:00</div>
      </IonSlide>
      <IonSlide class="slide-title">
     <div>12:00</div>
      </IonSlide>
    </IonSlides>
      </IonContent>
  );
};

export default Home;