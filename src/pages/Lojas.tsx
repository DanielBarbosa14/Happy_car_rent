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
} from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Lojas.css';

const Lojas: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [showModal, setShowModal] = useState(false);

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
          <IonItem>
            <IonLabel>Viana do castelo</IonLabel>
            <IonButton onClick={() => setShowModal(true)}>Ver mais</IonButton>
            <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
          <IonContent>
            <IonTitle></IonTitle>
            <IonImg src="https://iili.io/EkXCvt.md.jpg" alt="Descrição da imagem" style={{ width: '100%', height: 'auto' }} />
            <IonButton onClick={() => setShowModal(false)}>Fechar Modal</IonButton>
          </IonContent>
        </IonModal>
          </IonItem>
          
          <IonItem>
            <IonLabel>Braga</IonLabel>
            <IonButton onClick={() => setShowModal(true)}>Ver mais </IonButton>
            <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
          <IonContent>
            <IonTitle></IonTitle>
            <IonImg src="https://iili.io/EkXCvt.md.jpg" alt="Descrição da imagem" style={{ width: '100%', height: 'auto' }} />
            <IonButton onClick={() => setShowModal(false)}>Fechar Modal</IonButton>
          </IonContent>
        </IonModal>
          </IonItem>
          
        </IonList>

        <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
          <IonContent>
            <IonTitle></IonTitle>
            <IonImg src="https://iili.io/EkXCvt.md.jpg" alt="Descrição da imagem" style={{ width: '100%', height: 'auto' }} />
            <IonButton onClick={() => setShowModal(false)}>Fechar Modal</IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Lojas;
