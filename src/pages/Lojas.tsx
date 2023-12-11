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
  location: { latitude: number; longitude: number };
}

const Lojas: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [showModal, setShowModal] = useState(false);
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  const stores: Store[] = [
    {
      name: 'Loja A',
      description: 'Descrição da Loja A',
      location: { latitude: 40.7128, longitude: -74.0060 }, // Exemplo de coordenadas para Nova Iorque
    },
    {
      name: 'Loja B',
      description: 'Descrição da Loja B',
      location: { latitude: 34.0522, longitude: -118.2437 }, // Exemplo de coordenadas para Los Angeles
    },
    {
      name: 'Loja C',
      description: 'Descrição da Loja C',
      location: { latitude: 41.8781, longitude: -87.6298 }, // Exemplo de coordenadas para Chicago
    },
    // Adicione mais lojas conforme necessário
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

              {/* Informações da loja */}
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonLabel>{selectedStore.description}</IonLabel>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonLabel>Latitude: {selectedStore.location.latitude}</IonLabel>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonLabel>Longitude: {selectedStore.location.longitude}</IonLabel>
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
