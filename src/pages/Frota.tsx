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
  description: React.ReactNode;
  technicalData: string;
  dailyRentPrice: string;
}

const generateRandomPrice = () => {
  // Gerar um preço aleatório entre 50 e 150
  const randomPrice = (Math.random() * (150 - 50) + 50).toFixed(2);
  return `R$ ${randomPrice} por dia`;
};

const Frota: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [showModal, setShowModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const cars: Car[] = [
    {
      name: 'Toyota Corolla',
      description: (
        <>
          <p>
            <strong>Design Exterior:</strong>
          </p>
          <ul>
            <li>O Toyota Corolla possui um design moderno e aerodinâmico que combina elegância e estilo.</li>
            <li>Linhas fluidas e detalhes cuidadosamente esculpidos contribuem para sua estética atraente.</li>
            <li>Disponível em uma variedade de cores vibrantes e opções de acabamento.</li>
          </ul>

          <p>
            <strong>Interior Espaçoso e Confortável:</strong>
          </p>
          <ul>
            <li>O interior do Corolla é espaçoso, oferecendo amplo espaço para passageiros e bagagem.</li>
            <li>Materiais de alta qualidade e acabamentos refinados proporcionam um ambiente confortável.</li>
            <li>Assentos ergonomicamente projetados garantem conforto durante viagens longas.</li>
          </ul>

          <p>
            <strong>Tecnologia Avançada:</strong>
          </p>
          <ul>
            <li>Equipado com um sistema de infoentretenimento moderno, incluindo tela sensível ao toque.</li>
            <li>Recursos de conectividade, como Bluetooth e integração com smartphones, proporcionam uma experiência de condução conectada.</li>
            <li>Sistemas avançados de assistência ao condutor, como alerta de colisão e controle de cruzeiro adaptativo.</li>
          </ul>

          <p>
            <strong>Opção Popular de Aluguer:</strong>
          </p>
          <ul>
            <li>Reconhecido por sua confiabilidade, o Corolla é uma escolha popular para aluguer de veículos.</li>
            <li>Custos acessíveis de aluguer tornam-no atraente para uma variedade de necessidades de mobilidade.</li>
            <li>Manutenção e economia de combustível tornam o Corolla uma opção econômica para viagens.</li>
          </ul>
        </>
      ),
      technicalData: 'Dados técnicos do Toyota Corolla',
      dailyRentPrice: generateRandomPrice(),
    },
    {
      name: 'Audi A4',
      description: 'Descrição do Audi A4',
      technicalData: 'Dados técnicos do Audi A4',
      dailyRentPrice: generateRandomPrice(),
    },
    {
      name: 'Mercedes-Benz C-Class',
      description: 'Descrição do Mercedes-Benz C-Class',
      technicalData: 'Dados técnicos do Mercedes-Benz C-Class',
      dailyRentPrice: generateRandomPrice(),
    },
    {
      name: 'BMW 3 Series',
      description: 'Descrição do BMW 3 Series',
      technicalData: 'Dados técnicos do BMW 3 Series',
      dailyRentPrice: generateRandomPrice(),
    },
    {
      name: 'Lexus ES',
      description: 'Descrição do Lexus ES',
      technicalData: 'Dados técnicos do Lexus ES',
      dailyRentPrice: generateRandomPrice(),
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
