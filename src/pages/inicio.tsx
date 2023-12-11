import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './inicio.css';
import { Geolocation } from '@capacitor/geolocation';



const Inicio: React.FC = () => {
    const printCurrentPosition = async () => {
        const coordinates = await Geolocation.getCurrentPosition();
      
        console.log('::::::::::Current position:', coordinates);
      };

      printCurrentPosition();
  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Início</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
      
        <ExploreContainer name={name} />
      </IonContent>
    </IonPage>
  );
};

export default Inicio;
