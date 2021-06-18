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
import React from 'react';
import './styles.css';
import { logoApple, star } from 'ionicons/icons';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
const slideOpts = {
  initialSlide: 0,
  speed: 400
};
const Home: React.FC = () => {
  return (
    <IonPage>
      
      <IonContent fullscreen>
          {/* slider witth doctor-info */}
        <IonSlides pager={true} options={slideOpts}>
      <IonSlide>
      <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Имя</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
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
            <IonCardTitle><img src="vrach-wom.jpg"></img></IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <div><p>Длительность консультации</p>
                <p>50 минут</p>
            </div>
      </IonCardContent>
        </IonCard>
      </IonSlide>
    </IonSlides>
    {/* slider with dates */}
    <IonSlides pager={true} options={slideOpts}>
      <IonSlide>
      <IonCard button={true}>
          <IonCardHeader>
            <IonCardSubtitle>Сегодня</IonCardSubtitle>
            <IonCardTitle>26</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonSlide>
      <IonSlide>
      <IonCard button={true}>
          <IonCardHeader>
            <IonCardSubtitle>Ср</IonCardSubtitle>
            <IonCardTitle>27</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonSlide>
      <IonSlide>
      <IonCard button={true}>
          <IonCardHeader>
            <IonCardSubtitle>Ср</IonCardSubtitle>
            <IonCardTitle>28</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonSlide>
      <IonSlide>
      <IonCard button={true}>
          <IonCardHeader>
            <IonCardSubtitle>Ср</IonCardSubtitle>
            <IonCardTitle>29</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonSlide>
      <IonSlide>
      <IonCard button={true}>
          <IonCardHeader>
            <IonCardSubtitle>Ср</IonCardSubtitle>
            <IonCardTitle>30</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonSlide>
      <IonSlide>
      <IonCard button={true}>
          <IonCardHeader>
            <IonCardSubtitle>Ср</IonCardSubtitle>
            <IonCardTitle>31</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonSlide>
    </IonSlides>
    {/* slider with time */}
    <IonSlides pager={true} options={slideOpts}>
      <IonSlide>
      <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Имя</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
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
            <IonCardTitle><img src="vrach-wom.jpg"></img></IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <div><p>Длительность консультации</p>
                <p>50 минут</p>
            </div>
           
           
      </IonCardContent>
        </IonCard>
      </IonSlide>
    </IonSlides>
        <IonButton expand="block" fill="outline">Outline + Block</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
