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
    
      <IonContent scrollY={false} className="content-wrapper">
      <p className="prrbl-date">Возможная дата</p>
    {/* slider with dates */}
    <IonSlides options={slideOpts2} className="date-slider">
      <IonSlide className="slide-in-date-slider">
      <div className="ioncardclass">
        <div className="cart-subtitle">Сегодня</div>
        <div className="cart-title">26</div>
      </div>
      </IonSlide>
      <IonSlide className="slide-in-date-slider">
      <div className="ioncardclass">
        <div className="cart-subtitle">Вт</div>
        <div className="cart-title">27</div>
      </div>
      </IonSlide>
      <IonSlide className="slide-in-date-slider">
      <div className="ioncardclass">
        <div className="cart-subtitle">Ср</div>
        <div className="cart-title">28</div>
      </div>
      </IonSlide>
      <IonSlide className="slide-in-date-slider">
      <div className="ioncardclass">
        <div className="cart-subtitle">Чт</div>
        <div className="cart-title">29</div>
      </div>
      </IonSlide>
      <IonSlide className="slide-in-date-slider">
      <div className="ioncardclass">
        <div className="cart-subtitle">Пт</div>
        <div className="cart-title">30</div>
      </div>
      </IonSlide>
      <IonSlide className="slide-in-date-slider">
      <div className="ioncardclass">
        <div className="cart-subtitle">Сб</div>
        <div className="cart-title">31</div>
      </div>
      </IonSlide>
    </IonSlides>
    <p className="free-time">Свободное время</p>
    {/* slider with time */}
    <IonSlides options={slideOpts3} className="time-slider">
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