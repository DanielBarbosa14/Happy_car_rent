import React, { useState, useEffect } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/react';
import { useParams, useHistory } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Inicio.css';
import { Geolocation } from '@capacitor/geolocation';

const Inicio: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const { name } = useParams<{ name: string }>();
  const history = useHistory();

  useEffect(() => {
    const printCurrentPosition = async () => {
      try {
        const coordinates = await Geolocation.getCurrentPosition();
        setCurrentLocation({
          latitude: coordinates.coords.latitude,
          longitude: coordinates.coords.longitude,
        });
        console.log('::::::::::Current position:', coordinates);
      } catch (error) {
        console.error('Error getting current position:', error);
      }
    };

    printCurrentPosition();
  }, []);

  const findNearestStore = () => {
    // Implemente a lógica para encontrar a loja mais próxima aqui
    // Você pode usar a biblioteca de cálculo de distância (por exemplo, fórmula de haversine)
  };

  const navigateToFrota = () => {
    history.push('/frota'); 
  };

  const newCars = [
    { name: 'Fiat'},
    { name: 'Ford Puma'},
    { name: 'Opel Corsa'},
    { name: 'Ferrari'},
  ];

    const awards = [
      { name: 'Prêmio Limpeza'},
      { name: 'Prêmio Organização'},
      { name: 'Prêmio Facilidade'},
      { name: 'Prêmio Simpatia'},
    ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Início</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Campanha Publicitária</IonCardSubtitle>
            <IonCardTitle>Black Friday</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          <p>
          A <strong>Black Friday está a chegar!</strong> Não perca as ofertas incríveis em nossa frota de carros premium.
          </p>
          <p>
          <strong>Ofertas Exclusivas:</strong>
          </p>
          <ul>
          <li>Descontos especiais em aluguéis de longa duração.</li>
          <li>Bônus de fidelidade para clientes frequentes.</li>
          <li>Promoções em modelos específicos, incluindo o novíssimo BMW 3 Series.</li>
          </ul>
          <p>
          Aproveite a oportunidade para experimentar a elegância e o desempenho dos nossos carros de luxo a preços imperdíveis.
          </p>
        </IonCardContent>

        </IonCard>

        <IonList>
          <IonItem>
            <IonLabel>Novos Carros</IonLabel>
            <IonList>
              {newCars.map((car, index) => (
                <IonItem key={index}>
                  <IonLabel>{car.name}</IonLabel>
                </IonItem>
              ))}
            </IonList>
          </IonItem>
          <IonItem>
            <IonLabel>Prêmios Ganhos</IonLabel>
            <IonList>
              {awards.map((award, index) => (
                <IonItem key={index}>
                  <IonLabel>{award.name}</IonLabel>
                </IonItem>
              ))}
            </IonList>
          </IonItem>
        </IonList>

        {currentLocation && (
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Localização Atual</IonCardSubtitle>
              <IonCardTitle>Loja Mais Próxima</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              <IonList>
                <IonItem>
                  <IonLabel>Latitude: {currentLocation.latitude}</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>Longitude: {currentLocation.longitude}</IonLabel>
                </IonItem>
                <IonItem>
                  <IonButton onClick={findNearestStore}>Encontrar Loja Mais Próxima</IonButton>
                </IonItem>
              </IonList>
            </IonCardContent>
          </IonCard>
        )}

        <IonButton expand="full" onClick={navigateToFrota}>
          Ver Frota
        </IonButton>
        <ExploreContainer name={name} />
      </IonContent>
    </IonPage>
  );
};

export default Inicio;
