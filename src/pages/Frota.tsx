import React, { useState } from 'react';
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
  description: string;
  technicalData: string;
  dailyRentPrice: string;
}

const Frota: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [showModal, setShowModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const cars: Car[] = [
    {
      name: 'Toyota Corolla',
      description: 'Descrição do Toyota Corolla',
      technicalData: 'Dados técnicos do Toyota Corolla',
      dailyRentPrice: 'Preço do aluguer por dia do Toyota Corolla',
    },
    {
      name: 'Honda Civic',
      description: 'Descrição do Honda Civic',
      technicalData: 'Dados técnicos do Honda Civic',
      dailyRentPrice: 'Preço do aluguer por dia do Honda Civic',
    },
    {
      name: 'Ford Focus',
      description: 'Descrição do Ford Focus',
      technicalData: 'Dados técnicos do Ford Focus',
      dailyRentPrice: 'Preço do aluguer por dia do Ford Focus',
    },
    {
      name: 'Chevrolet Cruze',
      description: 'Descrição do Chevrolet Cruze',
      technicalData: 'Dados técnicos do Chevrolet Cruze',
      dailyRentPrice: 'Preço do aluguer por dia do Chevrolet Cruze',
    },
    {
      name: 'Volkswagen Golf',
      description: 'Descrição do Volkswagen Golf',
      technicalData: 'Dados técnicos do Volkswagen Golf',
      dailyRentPrice: 'Preço do aluguer por dia do Volkswagen Golf',
    },
    {
      name: 'Nissan Altima',
      description: 'Descrição do Nissan Altima',
      technicalData: 'Dados técnicos do Nissan Altima',
      dailyRentPrice: 'Preço do aluguer por dia do Nissan Altima',
    },
    {
      name: 'Mazda CX-5',
      description: 'Descrição do Mazda CX-5',
      technicalData: 'Dados técnicos do Mazda CX-5',
      dailyRentPrice: 'Preço do aluguer por dia do Mazda CX-5',
    },
    {
      name: 'Subaru Outback',
      description: 'Descrição do Subaru Outback',
      technicalData: 'Dados técnicos do Subaru Outback',
      dailyRentPrice: 'Preço do aluguer por dia do Subaru Outback',
    },
    {
      name: 'Hyundai Sonata',
      description: 'Descrição do Hyundai Sonata',
      technicalData: 'Dados técnicos do Hyundai Sonata',
      dailyRentPrice: 'Preço do aluguer por dia do Hyundai Sonata',
    },
    {
      name: 'Kia Sportage',
      description: 'Descrição do Kia Sportage',
      technicalData: 'Dados técnicos do Kia Sportage',
      dailyRentPrice: 'Preço do aluguer por dia do Kia Sportage',
    },
    {
      name: 'Jeep Wrangler',
      description: 'Descrição do Jeep Wrangler',
      technicalData: 'Dados técnicos do Jeep Wrangler',
      dailyRentPrice: 'Preço do aluguer por dia do Jeep Wrangler',
    },

  ];

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

        <IonList>
          {cars.map((car, index) => (
            <IonItem key={index}>
              <IonLabel>{car.name}</IonLabel>
              <IonButton onClick={() => handleOpenModal(car)}>Mais informações</IonButton>
            </IonItem>
          ))}
        </IonList>

        {/* Modal */}
        {selectedCar && (
          <IonModal isOpen={showModal} onDidDismiss={handleCloseModal}>
            <IonContent>
              <IonTitle>{selectedCar.name}</IonTitle>

              {/* Adicione aqui a imagem ilustrativa do carro */}
              <IonImg src="caminho/para/imagem.jpg" />

              {/* Informações do carro */}
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

              {/* Botão para fechar a modal */}
              <IonButton onClick={handleCloseModal}>Fechar Modal</IonButton>
            </IonContent>
          </IonModal>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Frota;
