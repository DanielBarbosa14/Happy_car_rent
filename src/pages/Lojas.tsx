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
import './Lojas.css';

interface Store {
  name: string;
  description: string;
  technicalData: string;
  dailyRentPrice: string;
  image: string;
}

// ... (imports omitidos para brevidade)

const Lojas: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [showModal, setShowModal] = useState(false);
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  const stores: Store[] = [
    {
      name: 'Loja A',
      description: 'Descrição da Loja A',
      technicalData: 'Dados técnicos da Loja A',
      dailyRentPrice: 'Preço do aluguer por dia da Loja A',
      image: 'loja_a.jpg',
    },
    {
      name: 'Loja B',
      description: 'Descrição da Loja B',
      technicalData: 'Dados técnicos da Loja B',
      dailyRentPrice: 'Preço do aluguer por dia da Loja B',
      image: 'loja_b.jpg',
    },
    {
      name: 'Loja C',
      description: 'Descrição da Loja C',
      technicalData: 'Dados técnicos da Loja C',
      dailyRentPrice: 'Preço do aluguer por dia da Loja C',
      image: 'loja_c.jpg',
    },
    {
      name: 'Loja D',
      description: 'Descrição da Loja D',
      technicalData: 'Dados técnicos da Loja D',
      dailyRentPrice: 'Preço do aluguer por dia da Loja D',
      image: 'loja_d.jpg',
    },
    {
      name: 'Loja E',
      description: 'Descrição da Loja E',
      technicalData: 'Dados técnicos da Loja E',
      dailyRentPrice: 'Preço do aluguer por dia da Loja E',
      image: 'loja_e.jpg',
    },
  ];

  const handleOpenModal = (store: Store) => {
    setSelectedStore(store);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedStore(null);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Lojas</IonTitle>
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
          {stores.map((store, index) => (
            <IonItem key={index}>
              <IonLabel>{store.name}</IonLabel>
              <IonButton onClick={() => handleOpenModal(store)}>Mais informações</IonButton>
            </IonItem>
          ))}
        </IonList>

        {/* Modal */}
        {selectedStore && (
          <IonModal isOpen={showModal} onDidDismiss={handleCloseModal}>
            <IonContent>
              <IonTitle>{selectedStore.name}</IonTitle>

              {/* Adicione aqui a imagem ilustrativa da loja */}
              <IonImg src={selectedStore.image} style={{ width: '100%', height: '200px' }} />

              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonLabel>{selectedStore.description}</IonLabel>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonLabel>{selectedStore.technicalData}</IonLabel>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonLabel>{selectedStore.dailyRentPrice}</IonLabel>
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

export default Lojas;

