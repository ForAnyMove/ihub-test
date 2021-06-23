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
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { State } from 'ionicons/dist/types/stencil-public-runtime';
 

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

    <IonContent className="content-wrapper" scrollY={false}>
      <p className="prrbl-date">Возможная дата</p>
      {/* slider with dates */}
      <IonSlides   options={slideOpts2} className="date-slider">
      <IonSlide className="slide-in-date-slider">
      <div className="ioncardclass">
        <div className="cart-subtitle">Сегодня</div>
        <div className="cart-title">3</div>
      </div>
      </IonSlide>
      <IonSlide className="slide-in-date-slider">
      <div className="ioncardclass">
        <div className="cart-subtitle">Пн</div>
        <div className="cart-title">4</div>
      </div>
      </IonSlide>
      <IonSlide className="slide-in-date-slider">
      <div className="ioncardclass">
        <div className="cart-subtitle">Вт</div>
        <div className="cart-title">5</div>
      </div>
      </IonSlide>
      <IonSlide className="slide-in-date-slider">
      <div className="ioncardclass">
        <div className="cart-subtitle">Ср</div>
        <div className="cart-title">6</div>
      </div>
      </IonSlide>
      <IonSlide className="slide-in-date-slider">
      <div className="ioncardclass">
        <div className="cart-subtitle">Чт</div>
        <div className="cart-title">7</div>
      </div>
      </IonSlide>
      <IonSlide className="slide-in-date-slider">
      <div className="ioncardclass">
        <div className="cart-subtitle">Пт</div>
        <div className="cart-title">8</div>
      </div>
      </IonSlide>
      </IonSlides>
      <p className="free-time">Свободное время</p>
      {/* slider with time */}
      <IonSlides options={slideOpts3} className="time-slider">
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