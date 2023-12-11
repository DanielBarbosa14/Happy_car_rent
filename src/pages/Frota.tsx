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
  technicalData: React.ReactNode;
  dailyRentPrice: string;
}

const generateRandomPrice = () => {
  // Gerar um preço aleatório entre 50 e 150
  const randomPrice = (Math.random() * (150 - 50) + 50).toFixed(2);
  return `€${randomPrice}`;
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
      technicalData: (
    <>
      <p>
        <strong>Dados Técnicos:</strong>
      </p>
      <ul>
        <li>Motor: 1.8L, 4 cilindros</li>
        <li>Potência: 132 hp @ 6,000 rpm</li>
        <li>Transmissão: Automática CVT</li>
        <li>Consumo de Combustível: 29 mpg (cidade) / 37 mpg (estrada)</li>
      </ul>
    </>
  ) as React.ReactNode,
  dailyRentPrice: generateRandomPrice(),
    },
    {
      name: 'Audi A4',
      description: (
        <>
          <p>
            <strong>Design Exterior:</strong>
          </p>
          <ul>
            <li>O Audi A4 apresenta um design sofisticado, combinando linhas elegantes e uma estética moderna.</li>
            <li>Detalhes precisos e elementos aerodinâmicos contribuem para uma presença visual marcante.</li>
            <li>Disponível em uma variedade de cores premium e opções de acabamento.</li>
          </ul>
      
          <p>
            <strong>Interior Espaçoso e Confortável:</strong>
          </p>
          <ul>
            <li>O interior do Audi A4 oferece um ambiente espaçoso, proporcionando conforto tanto para motorista quanto passageiros.</li>
            <li>Os materiais de alta qualidade e o design refinado garantem uma experiência luxuosa.</li>
            <li>Assentos ergonomicamente projetados oferecem suporte ideal durante viagens longas.</li>
          </ul>
      
          <p>
            <strong>Tecnologia Avançada:</strong>
          </p>
          <ul>
            <li>Equipado com um sistema de infoentretenimento de última geração, incluindo uma interface intuitiva e recursos inovadores.</li>
            <li>Conectividade aprimorada, como Bluetooth e integração perfeita com dispositivos móveis, proporcionando uma experiência de condução conectada.</li>
            <li>Recursos avançados de assistência ao condutor, como controle de cruzeiro adaptativo e assistência de estacionamento automático.</li>
          </ul>
      
          <p>
            <strong>Opção de Aluguer Premium:</strong>
          </p>
          <ul>
            <li>O Audi A4 é reconhecido como uma opção premium para aluguer de veículos, combinando desempenho e elegância.</li>
            <li>Apesar do caráter premium, oferece uma opção atraente para diversas necessidades de mobilidade.</li>
            <li>Com eficiência de combustível e manutenção de alto padrão, o Audi A4 proporciona uma experiência de condução premium acessível.</li>
          </ul>
        </>
      ),      
      technicalData: (
        <>
          <p>
            <strong>Dados Técnicos:</strong>
          </p>
          <ul>
            <li>Motor: 1.8L, 4 cilindros</li>
            <li>Potência: 132 hp @ 6,000 rpm</li>
            <li>Transmissão: Automática CVT</li>
            <li>Consumo de Combustível: 29 mpg (cidade) / 37 mpg (estrada)</li>
          </ul>
        </>
      ) as React.ReactNode,
      dailyRentPrice: generateRandomPrice(),
    },
    {
      name: 'Mercedes-Benz C-Class',
      description: (
        <>
          <p>
            <strong>Design Exterior:</strong>
          </p>
          <ul>
            <li>O Mercedes-Benz C-Class possui um design elegante e aerodinâmico, combinando luxo e estilo.</li>
            <li>Linhas fluídas e detalhes meticulosamente elaborados contribuem para sua estética atraente e sofisticada.</li>
            <li>Disponível em uma variedade de cores premium e opções de acabamento que refletem a excelência da marca.</li>
          </ul>
    
          <p>
            <strong>Interior Espaçoso e Confortável:</strong>
          </p>
          <ul>
            <li>O interior do Mercedes-Benz C-Class oferece um ambiente espaçoso, com materiais de alta qualidade e acabamentos refinados.</li>
            <li>Espaço generoso para passageiros e bagagem, proporcionando uma experiência de viagem confortável.</li>
            <li>Assentos ergonomicamente projetados garantem o conforto mesmo em viagens longas.</li>
          </ul>
    
          <p>
            <strong>Tecnologia Avançada:</strong>
          </p>
          <ul>
            <li>Equipado com um sistema de infoentretenimento de última geração, incluindo uma tela sensível ao toque e recursos intuitivos.</li>
            <li>Conectividade aprimorada, oferecendo Bluetooth e integração perfeita com dispositivos móveis para uma experiência de condução conectada.</li>
            <li>Recursos avançados de assistência ao condutor, como alerta de colisão e controle de cruzeiro adaptativo, proporcionam segurança e conveniência.</li>
          </ul>
    
          <p>
            <strong>Opção Premium de Aluguer:</strong>
          </p>
          <ul>
            <li>O Mercedes-Benz C-Class é uma escolha premium para aluguer de veículos, oferecendo desempenho e sofisticação.</li>
            <li>Os custos podem refletir a qualidade premium, mas a experiência de condução e o status são incomparáveis.</li>
            <li>Manutenção e eficiência de combustível são características que fazem do C-Class uma opção luxuosa e econômica.</li>
          </ul>
        </>
      ),
      technicalData: (
        <>
          <p>
            <strong>Dados Técnicos:</strong>
          </p>
          <ul>
            <li>Motor: 1.8L, 4 cilindros</li>
            <li>Potência: 132 hp @ 6,000 rpm</li>
            <li>Transmissão: Automática CVT</li>
            <li>Consumo de Combustível: 29 mpg (cidade) / 37 mpg (estrada)</li>
          </ul>
        </>
      ) as React.ReactNode,
      dailyRentPrice: generateRandomPrice() + ' €'
    },
    {
      name: 'BMW 3 Series',
      description: (
        <>
          <p>
            <strong>Design Exterior:</strong>
          </p>
          <ul>
            <li>O BMW 3 Series possui um design moderno e aerodinâmico que combina elegância e esportividade.</li>
            <li>Linhas fluidas e detalhes precisos contribuem para uma estética atraente e dinâmica.</li>
            <li>Disponível em uma variedade de cores vibrantes e opções de acabamento premium.</li>
          </ul>
    
          <p>
            <strong>Interior Espaçoso e Confortável:</strong>
          </p>
          <ul>
            <li>O interior do BMW 3 Series oferece amplo espaço para passageiros e bagagem, combinando conforto e funcionalidade.</li>
            <li>Materiais de alta qualidade e acabamentos refinados criam um ambiente sofisticado.</li>
            <li>Assentos ergonomicamente projetados proporcionam conforto durante viagens longas e passeios dinâmicos.</li>
          </ul>
    
          <p>
            <strong>Tecnologia Avançada:</strong>
          </p>
          <ul>
            <li>Equipado com um sistema de infoentretenimento de última geração, incluindo uma tela sensível ao toque e recursos intuitivos.</li>
            <li>Recursos de conectividade, como Bluetooth e integração com smartphones, oferecem uma experiência de condução conectada.</li>
            <li>Sistemas avançados de assistência ao condutor, como alerta de colisão e controle de cruzeiro adaptativo, elevam a segurança e a conveniência.</li>
          </ul>
    
          <p>
            <strong>Opção Premium de Aluguer:</strong>
          </p>
          <ul>
            <li>O BMW 3 Series é uma escolha premium para aluguer de veículos, destacando-se pelo desempenho e pela elegância.</li>
            <li>Custos de aluguer refletem a qualidade premium e a experiência de condução envolvente.</li>
            <li>Manutenção eficiente e eficiência de combustível fazem do BMW 3 Series uma opção atraente para viagens.</li>
          </ul>
        </>
      ) as React.ReactNode,
      technicalData: (
        <>
          <p>
            <strong>Dados Técnicos:</strong>
          </p>
          <ul>
            <li>Motor: 1.8L, 4 cilindros</li>
            <li>Potência: 132 hp @ 6,000 rpm</li>
            <li>Transmissão: Automática CVT</li>
            <li>Consumo de Combustível: 29 mpg (cidade) / 37 mpg (estrada)</li>
          </ul>
        </>
      ) as React.ReactNode,
      dailyRentPrice: generateRandomPrice() + ' €',
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
              <IonButton onClick={handleCloseModal}>Fechar</IonButton>
            </IonContent>
          </IonModal>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Frota;
