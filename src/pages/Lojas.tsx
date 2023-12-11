import React, { useState } from 'react';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonModal,
  IonHeader as ModalHeader,
  IonContent as ModalContent,
  IonToolbar as ModalToolbar,
  IonTitle as ModalTitle,
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import './Lojas.css';

// Exemplo de lista de lojas
const lojasData = [
  {
    id: 1,
    nome: 'Viana do Castelo',
    imagemCidade: 'url_imagem_loja_a',
    morada: 'Rua do pedreiros',
    mapa: 'url_mapa_loja_a',
  },
  // Adicione mais lojas conforme necessário
];

const Lojas: React.FC = () => {
  const [selectedLoja, setSelectedLoja] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  const openModal = (loja) => {
    setSelectedLoja(loja);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedLoja(null);
    setShowModal(false);
  };

  const navigateToFrota = () => {
    if (selectedLoja) {
      // Aqui você pode navegar para a página da frota e aplicar o filtro necessário
      // Substitua 'selectedLoja.id' pelo identificador real da loja
      history.push(`/frota/${selectedLoja.id}`);
    }
    closeModal();
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
            <IonTitle size="large">Lojas</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Lojas" />

        {/* Lista de Lojas */}
        <IonList>
          {lojasData.map((loja) => (
            <IonItem key={loja.id} onClick={() => openModal(loja)}>
              <IonLabel>{loja.nome}</IonLabel>
            </IonItem>
          ))}
        </IonList>

        {/* Modal com informações da loja */}
        <IonModal isOpen={showModal} onDidDismiss={closeModal}>
          <ModalHeader>
            <ModalToolbar>
              <IonTitle>{selectedLoja?.nome}</IonTitle>
            </ModalToolbar>
          </ModalHeader>
          <ModalContent>
            {/* Conteúdo da modal */}
            {selectedLoja && (
              <div>
                <img src={selectedLoja.imagemCidade} alt={`Cidade da ${selectedLoja.nome}`} />
                <p>Morada: {selectedLoja.morada}</p>
                {/* Adicione aqui um componente de mapa usando selectedLoja.mapa */}
                <IonButton onClick={navigateToFrota}>Consultar Lista de Carros</IonButton>
                <IonButton onClick={closeModal}>Fechar</IonButton>
              </div>
            )}
          </ModalContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Lojas;
