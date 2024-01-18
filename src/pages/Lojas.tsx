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
  import { useHistory, useParams } from 'react-router';
  import ExploreContainer from '../components/ExploreContainer';
  import './Lojas.css';

  interface Store {
    name: string;
    description: string;
    technicalData: string;
    image: string;
  }

  const Lojas: React.FC = () => {
    const { name } = useParams<{ name: string }>();
    const [showModal, setShowModal] = useState(false);
    const [selectedStore, setSelectedStore] = useState<Store | null>(null);
    const history = useHistory();

  useEffect(() => {
    const fetchLojas = async () => {
      try {
        const response = await fetch('http://localhost:3000/lojas');
        const lojaData = await response.json();
        console.log('Dados das lojas', lojaData);
        setSelectedStore(lojaData);
      } catch (error) {
        console.error('Erro ao obter dados das lojas:', (error as Error).message);
      }
    };
      fetchLojas();
    }, []);

    const handleOpenModal = (store: Store) => {
      setSelectedStore(store);
      setShowModal(true);
    };

    const handleCloseModal = () => {
      setShowModal(false);
      setSelectedStore(null);
    };

    const navigateToFrota = () => {
      history.push('/frota');
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
              <IonButton onClick={navigateToFrota}>Ver Frota</IonButton>
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
                  </IonRow>
                </IonGrid>

                 {/* Botão para fechar a modal */}
                 <IonButton onClick={handleCloseModal}>Fechar</IonButton>
                

              </IonContent>
            </IonModal>
          )}
        </IonContent>
      </IonPage>
    );
  };

  export default Lojas;