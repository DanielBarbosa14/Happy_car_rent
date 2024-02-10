import React, { useEffect, useState } from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonModal,
  IonList,
  IonItem,
  IonLabel,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Frota.css';

interface Car {
  name: string;
  description: React.ReactNode;
  technicalData: React.ReactNode;
  dailyRentPrice: string;
}

const generateRandomPrice = () => {
  const randomPrice = (Math.random() * (150 - 50) + 50).toFixed(2);
  return `€${randomPrice}`;
};

const : React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [showModal, setShowModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  useEffect(() => {
    const fetchFrota = async () => {
      try {
        const response = await fetch('http://localhost:3000/frota');
        const frotaData = await response.json();
        console.log('Dados dos carros', frotaData);
        setSelectedCar(frotaData);
      } catch (error) {
        console.error('Erro ao obter dados dos carros:', (error as Error).message);
      }
    };
      fetchFrota();
    }, []);

const handleClickLojas = async (item: Car) => {
  setSelectedCar(item);

const handleOpenModal = (car: Car) => {
setSelectedCar(car);
setShowModal(true);
};

const handleCloseModal = () => {
setShowModal(false);
setSelectedCar(null);
};
  return(
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Frota</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">{name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <ExploreContainer name={name} />

  <IonList>
    {selectedCar!.map((car, index) => (
      <IonItem key={index}>
        <IonLabel>{car.name}</IonLabel>
        <IonButton onClick={() => handleOpenModal(car)}>Mais informações</IonButton>
      </IonItem>
    ))}
  </IonList>

        
      </IonContent>
    </IonPage>
    );
}
    
}


export default Frota;