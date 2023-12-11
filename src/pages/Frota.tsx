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
} from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Frota.css';

const Frota: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [showModal, setShowModal] = useState(false);

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
          <IonItem>
            <IonLabel>Toyota Corolla</IonLabel>
            <IonButton onClick={() => setShowModal(true)}>Open Modal</IonButton>
          </IonItem>
          <IonItem>
            <IonLabel>Opel Corsa</IonLabel>
            <IonButton onClick={() => setShowModal(true)}>Open Modal</IonButton>
          </IonItem>
          <IonItem>
            <IonLabel>Mercedes C200</IonLabel>
            <IonButton onClick={() => setShowModal(true)}>Open Modal</IonButton>
          </IonItem>
          <IonItem>
            <IonLabel>Fiat</IonLabel>
            <IonButton onClick={() => setShowModal(true)}>Open Modal</IonButton>
          </IonItem>
          <IonItem>
            <IonLabel>Ford Puma</IonLabel>
            <IonButton onClick={() => setShowModal(true)}>Open Modal</IonButton>
          </IonItem>
          <IonItem>
            <IonLabel>Renault</IonLabel>
            <IonButton onClick={() => setShowModal(true)}>Open Modal</IonButton>
          </IonItem>
        </IonList>

        <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
          <IonContent>
            <IonTitle>Modal Content</IonTitle>
            <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Frota;
