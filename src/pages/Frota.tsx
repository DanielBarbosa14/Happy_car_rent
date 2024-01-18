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

const categories = ['Compact', 'Sedan', 'SUV', 'Luxury'];
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

return (
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

      {/* Exibição dos Carros (Detalhes e Botões) */}
      {Object.entries(carsByCategory).map(([category, carList]) => (
  <IonList key={category}>
    <IonItem>
      <IonLabel>{category}</IonLabel>
    </IonItem>
    {carList.map((car, index) => (
      <IonItem key={index}>
        <IonLabel>{car.name}</IonLabel>
        <IonButton onClick={() => handleOpenModal(car)}>Mais informações</IonButton>
      </IonItem>
    ))}
  </IonList>
))}

        {/* Modal */}
        {selectedCar && (
          <IonModal isOpen={showModal} onDidDismiss={handleCloseModal}>
            <IonContent>
              <IonTitle>{selectedCar.name}</IonTitle>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonLabel>{selectedCar.description}</IonLabel>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonLabel>{selectedCar.technicalData}</IonLabel>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonLabel>{selectedCar.dailyRentPrice}</IonLabel>
                  </IonCol>
                </IonRow>
              </IonGrid>
              {/* Botão de fechar modal */}
              <IonButton onClick={handleCloseModal}>Fechar</IonButton>
            </IonContent>
          </IonModal>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Frota;