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
  const randomPrice = (Math.random() * (150 - 50) + 50).toFixed(2);
  return `€${randomPrice}`;
};

const categories = ['Compact', 'Sedan', 'SUV', 'Luxury'];

const Frota: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [showModal, setShowModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const carsByCategory = {
    Compact: [
      {
      name: 'Toyota Corolla',
      description: (
        <>
        <IonImg src="https://kong-proxy-intranet.toyota-europe.com/c1-images/resize/ccis/1280x1280/zip/pt/configurationtype/visual-for-grade-selector/product-token/ebadee5e-5ac7-4501-9b41-7786432cb0c1/grade/93e19bae-b1c0-4535-9917-e7021b6a763d/body/7b77d85b-8f26-4645-82ac-22154a7d6293/fallback/true/padding/50,50,50,50/image-quality/70/day-exterior-4.png" />
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
    name: '2023 Honda Civic Type R',
    description: (
      <>
      <IonImg src="https://paultan.org/image/2023/09/2023_Honda_Civic_TypeR_Launch_Malaysia-2.jpg" />
        <p>
          <strong>Design Exterior:</strong>
        </p>
        <ul>
          <li>O 2023 Honda Civic Type R possui um design moderno e aerodinâmico que combina elegância e estilo.</li>
          <li>Linhas fluidas e detalhes cuidadosamente esculpidos contribuem para sua estética atraente.</li>
          <li>Disponível em uma variedade de cores vibrantes e opções de acabamento.</li>
        </ul>

        <p>
          <strong>Interior Espaçoso e Confortável:</strong>
        </p>
        <ul>
          <li>O interior do 2023 Honda Civic Type R é espaçoso, oferecendo amplo espaço para passageiros e bagagem.</li>
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
          <li>Reconhecido por sua confiabilidade, o 2023 Honda Civic Type R é uma escolha popular para aluguer de veículos.</li>
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
      name: '2024 Acura Integra',
      description: (
        <>
        <IonImg src="https://www.motortrend.com/uploads/2023/04/2024-Acura-Integra-Type-S-21.jpg" />
          <p>
            <strong>Design Exterior:</strong>
          </p>
          <ul>
            <li>O 2024 Acura Integra possui um design moderno e aerodinâmico que combina elegância e estilo.</li>
            <li>Linhas fluidas e detalhes cuidadosamente esculpidos contribuem para sua estética atraente.</li>
            <li>Disponível em uma variedade de cores vibrantes e opções de acabamento.</li>
          </ul>
  
          <p>
            <strong>Interior Espaçoso e Confortável:</strong>
          </p>
          <ul>
            <li>O interior do 2024 Acura Integra é espaçoso, oferecendo amplo espaço para passageiros e bagagem.</li>
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
            <li>Reconhecido por sua confiabilidade, o 2024 Acura Integra é uma escolha popular para aluguer de veículos.</li>
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
        name: '2024 Honda Civic',
        description: (
          <>
          <IonImg src="https://vehicle-images.dealerinspire.com/3066-11001513/19XFL2G85RE005045/cae208ebd38e028c6db3e3e3f8de3961.jpg" />
            <p>
              <strong>Design Exterior:</strong>
            </p>
            <ul>
              <li>O 2024 Honda Civic possui um design moderno e aerodinâmico que combina elegância e estilo.</li>
              <li>Linhas fluidas e detalhes cuidadosamente esculpidos contribuem para sua estética atraente.</li>
              <li>Disponível em uma variedade de cores vibrantes e opções de acabamento.</li>
            </ul>
    
            <p>
              <strong>Interior Espaçoso e Confortável:</strong>
            </p>
            <ul>
              <li>O interior do 2024 Honda Civic é espaçoso, oferecendo amplo espaço para passageiros e bagagem.</li>
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
              <li>Reconhecido por sua confiabilidade, o 2024 Honda Civic é uma escolha popular para aluguer de veículos.</li>
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

  ],
  Sedan: [
    {
      name: 'Audi A4',
      description: (
        <>
        <IonImg src='https://cf-cdn-v5.audi.at/media/GalleryThumbnails_Slider_Image_Component/72903-761229-slider-470189/dh-1460-a9ad28/d4657f1a/1685948687/1920x1080-aa4-l-191004-oe.jpg'/>
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
      name: 'Chevrolet Onix Plus',
      description: (
        <>
        <IonImg src='https://t.ctcdn.com.br/ttMiIkufJ9iruWRsKnvSbCajM6k=/1200x675/smart/i624421.jpeg'/>
          <p>
            <strong>Design Exterior:</strong>
          </p>
          <ul>
            <li>O Chevrolet Onix Plus apresenta um design sofisticado, combinando linhas elegantes e uma estética moderna.</li>
            <li>Detalhes precisos e elementos aerodinâmicos contribuem para uma presença visual marcante.</li>
            <li>Disponível em uma variedade de cores premium e opções de acabamento.</li>
          </ul>
      
          <p>
            <strong>Interior Espaçoso e Confortável:</strong>
          </p>
          <ul>
            <li>O interior do Chevrolet Onix Plus oferece um ambiente espaçoso, proporcionando conforto tanto para motorista quanto passageiros.</li>
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
            <li>O Chevrolet Onix Plus é reconhecido como uma opção premium para aluguer de veículos, combinando desempenho e elegância.</li>
            <li>Apesar do caráter premium, oferece uma opção atraente para diversas necessidades de mobilidade.</li>
            <li>Com eficiência de combustível e manutenção de alto padrão, o Chevrolet Onix Plus proporciona uma experiência de condução premium acessível.</li>
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
      name: 'Honda City',
      description: (
        <>
        <IonImg src='https://upload.wikimedia.org/wikipedia/commons/1/1f/0_Honda_City_%287th_generation%29_sedan.jpg'/>
          <p>
            <strong>Design Exterior:</strong>
          </p>
          <ul>
            <li>O Honda City apresenta um design sofisticado, combinando linhas elegantes e uma estética moderna.</li>
            <li>Detalhes precisos e elementos aerodinâmicos contribuem para uma presença visual marcante.</li>
            <li>Disponível em uma variedade de cores premium e opções de acabamento.</li>
          </ul>
      
          <p>
            <strong>Interior Espaçoso e Confortável:</strong>
          </p>
          <ul>
            <li>O interior do Honda City oferece um ambiente espaçoso, proporcionando conforto tanto para motorista quanto passageiros.</li>
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
            <li>O Honda City é reconhecido como uma opção premium para aluguer de veículos, combinando desempenho e elegância.</li>
            <li>Apesar do caráter premium, oferece uma opção atraente para diversas necessidades de mobilidade.</li>
            <li>Com eficiência de combustível e manutenção de alto padrão, o Honda City proporciona uma experiência de condução premium acessível.</li>
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
      name: 'Fiat Grand Siena',
      description: (
        <>
        <IonImg src='https://uploads.vrum.com.br/2022/08/74438a8a-fiat-grand-siena-modelo-2020-com-kit-gnv-vermelho-de-frente-no-asfalto.jpg'/>
          <p>
            <strong>Design Exterior:</strong>
          </p>
          <ul>
            <li>O Fiat Grand Siena apresenta um design sofisticado, combinando linhas elegantes e uma estética moderna.</li>
            <li>Detalhes precisos e elementos aerodinâmicos contribuem para uma presença visual marcante.</li>
            <li>Disponível em uma variedade de cores premium e opções de acabamento.</li>
          </ul>
      
          <p>
            <strong>Interior Espaçoso e Confortável:</strong>
          </p>
          <ul>
            <li>O interior do Fiat Grand Siena oferece um ambiente espaçoso, proporcionando conforto tanto para motorista quanto passageiros.</li>
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
            <li>O Fiat Grand Siena é reconhecido como uma opção premium para aluguer de veículos, combinando desempenho e elegância.</li>
            <li>Apesar do caráter premium, oferece uma opção atraente para diversas necessidades de mobilidade.</li>
            <li>Com eficiência de combustível e manutenção de alto padrão, o Fiat Grand Siena proporciona uma experiência de condução premium acessível.</li>
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
  ],
  SUV: [  
    {
      name: 'Mercedes-Benz C-Class',

      description: (
        <>
        <IonImg src='https://www.mercedes-benz.pt/content/dam/hq/passengercars/cars/c-class/c-class-saloon-w206-pi/modeloverview/06-2022/images/mercedes-benz-c-class-w206-modeloverview-696x392-06-2022.png'/>
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
      name: '2024 Mazda CX-5',

      description: (
        <>
        <IonImg src='https://media.ed.edmunds-media.com/mazda/cx-5/2024/oem/2024_mazda_cx-5_4dr-suv_25-carbon-turbo_fq_oem_1_1600.jpg'/>
          <p>
            <strong>Design Exterior:</strong>
          </p>
          <ul>
            <li>O 2024 Mazda CX-5 possui um design elegante e aerodinâmico, combinando luxo e estilo.</li>
            <li>Linhas fluídas e detalhes meticulosamente elaborados contribuem para sua estética atraente e sofisticada.</li>
            <li>Disponível em uma variedade de cores premium e opções de acabamento que refletem a excelência da marca.</li>
          </ul>
    
          <p>
            <strong>Interior Espaçoso e Confortável:</strong>
          </p>
          <ul>
            <li>O interior do 2024 Mazda CX-5 oferece um ambiente espaçoso, com materiais de alta qualidade e acabamentos refinados.</li>
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
            <li>O 2024 Mazda CX-5 é uma escolha premium para aluguer de veículos, oferecendo desempenho e sofisticação.</li>
            <li>Os custos podem refletir a qualidade premium, mas a experiência de condução e o status são incomparáveis.</li>
            <li>Manutenção e eficiência de combustível são características que fazem do 2024 Mazda CX-5 uma opção luxuosa e econômica.</li>
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
      name: '2024 Hyundai Tucson',

      description: (
        <>
        <IonImg src='https://www.motortrend.com/uploads/2023/08/2024-Hyundai-Tucson-Limited-AWD-front-view-26.jpg'/>
          <p>
            <strong>Design Exterior:</strong>
          </p>
          <ul>
            <li>O 2024 Hyundai Tucson possui um design elegante e aerodinâmico, combinando luxo e estilo.</li>
            <li>Linhas fluídas e detalhes meticulosamente elaborados contribuem para sua estética atraente e sofisticada.</li>
            <li>Disponível em uma variedade de cores premium e opções de acabamento que refletem a excelência da marca.</li>
          </ul>
    
          <p>
            <strong>Interior Espaçoso e Confortável:</strong>
          </p>
          <ul>
            <li>O interior do 2024 Hyundai Tucson oferece um ambiente espaçoso, com materiais de alta qualidade e acabamentos refinados.</li>
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
            <li>O 2024 Hyundai Tucson é uma escolha premium para aluguer de veículos, oferecendo desempenho e sofisticação.</li>
            <li>Os custos podem refletir a qualidade premium, mas a experiência de condução e o status são incomparáveis.</li>
            <li>Manutenção e eficiência de combustível são características que fazem do 2024 Hyundai Tucson uma opção luxuosa e econômica.</li>
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
      name: '2023 Maserati Grecale',

      description: (
        <>
        <IonImg src='https://www.razaoautomovel.com/wp-content/uploads/2022/03/2023-Maserati-Grecale-Trofeo-1-Copy-1440x960.jpg'/>
          <p>
            <strong>Design Exterior:</strong>
          </p>
          <ul>
            <li>O 2023 Maserati Grecale possui um design elegante e aerodinâmico, combinando luxo e estilo.</li>
            <li>Linhas fluídas e detalhes meticulosamente elaborados contribuem para sua estética atraente e sofisticada.</li>
            <li>Disponível em uma variedade de cores premium e opções de acabamento que refletem a excelência da marca.</li>
          </ul>
    
          <p>
            <strong>Interior Espaçoso e Confortável:</strong>
          </p>
          <ul>
            <li>O interior do 2023 Maserati Grecale oferece um ambiente espaçoso, com materiais de alta qualidade e acabamentos refinados.</li>
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
            <li>O 2023 Maserati Grecale é uma escolha premium para aluguer de veículos, oferecendo desempenho e sofisticação.</li>
            <li>Os custos podem refletir a qualidade premium, mas a experiência de condução e o status são incomparáveis.</li>
            <li>Manutenção e eficiência de combustível são características que fazem do 2023 Maserati Grecale uma opção luxuosa e econômica.</li>
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
  ],
  Luxury: [
    {
      name: 'BMW 3 Series',
      description: (
        <>
        <IonImg src='https://media.ed.edmunds-media.com/bmw/3-series/2023/oem/2023_bmw_3-series_sedan_330i-xdrive_fq_oem_1_1600.jpg'/>
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
    
    {
      name: '2024 Cadillac CT4',
      description: (
        <>
        <IonImg src='https://www.motortrend.com/uploads/2023/05/2024-Cadillac-CT4-V-Blackwing-front-view-4.jpg'/>
          <p>
            <strong>Design Exterior:</strong>
          </p>
          <ul>
            <li>O 2024 Cadillac CT4 possui um design moderno e aerodinâmico que combina elegância e esportividade.</li>
            <li>Linhas fluidas e detalhes precisos contribuem para uma estética atraente e dinâmica.</li>
            <li>Disponível em uma variedade de cores vibrantes e opções de acabamento premium.</li>
          </ul>
    
          <p>
            <strong>Interior Espaçoso e Confortável:</strong>
          </p>
          <ul>
            <li>O interior do 2024 Cadillac CT4 oferece amplo espaço para passageiros e bagagem, combinando conforto e funcionalidade.</li>
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
            <li>O 2024 Cadillac CT4 é uma escolha premium para aluguer de veículos, destacando-se pelo desempenho e pela elegância.</li>
            <li>Custos de aluguer refletem a qualidade premium e a experiência de condução envolvente.</li>
            <li>Manutenção eficiente e eficiência de combustível fazem do 2024 Cadillac CT4 uma opção atraente para viagens.</li>
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

    {
      name: '2023 Tesla Model 3',
      description: (
        <>
        <IonImg src='https://media.ed.edmunds-media.com/tesla/model-3/2022/oem/2022_tesla_model-3_sedan_performance_fq_oem_1_1600.jpg'/>
          <p>
            <strong>Design Exterior:</strong>
          </p>
          <ul>
            <li>O 2023 Tesla Model 3 possui um design moderno e aerodinâmico que combina elegância e esportividade.</li>
            <li>Linhas fluidas e detalhes precisos contribuem para uma estética atraente e dinâmica.</li>
            <li>Disponível em uma variedade de cores vibrantes e opções de acabamento premium.</li>
          </ul>
    
          <p>
            <strong>Interior Espaçoso e Confortável:</strong>
          </p>
          <ul>
            <li>O interior do 2023 Tesla Model 3 oferece amplo espaço para passageiros e bagagem, combinando conforto e funcionalidade.</li>
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
            <li>O 2023 Tesla Model 3 é uma escolha premium para aluguer de veículos, destacando-se pelo desempenho e pela elegância.</li>
            <li>Custos de aluguer refletem a qualidade premium e a experiência de condução envolvente.</li>
            <li>Manutenção eficiente e eficiência de combustível fazem do 2023 Tesla Model 3 uma opção atraente para viagens.</li>
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
    {
      name: '2023 Genesis G70',
      description: (
        <>
        <IonImg src='https://images.ctfassets.net/c9t6u0qhbv9e/1Xg3noAJxSQCN0JjgtbYHI/562a95e939a4cbe13cf54bbcc77e67ed/2023_Genesis_G70_Review_Thumbnail.jpg'/>
          <p>
            <strong>Design Exterior:</strong>
          </p>
          <ul>
            <li>O 2023 Genesis G70 possui um design moderno e aerodinâmico que combina elegância e esportividade.</li>
            <li>Linhas fluidas e detalhes precisos contribuem para uma estética atraente e dinâmica.</li>
            <li>Disponível em uma variedade de cores vibrantes e opções de acabamento premium.</li>
          </ul>
    
          <p>
            <strong>Interior Espaçoso e Confortável:</strong>
          </p>
          <ul>
            <li>O interior do 2023 Genesis G70 oferece amplo espaço para passageiros e bagagem, combinando conforto e funcionalidade.</li>
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
            <li>O 2023 Genesis G70 é uma escolha premium para aluguer de veículos, destacando-se pelo desempenho e pela elegância.</li>
            <li>Custos de aluguer refletem a qualidade premium e a experiência de condução envolvente.</li>
            <li>Manutenção eficiente e eficiência de combustível fazem do 2023 Genesis G70 uma opção atraente para viagens.</li>
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
  ],
};

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

      {/* Exibição dos Carros (Detalhes e Botões) */}
      {Object.entries(carsByCategory).map(([category, carList]) => (
  <IonList key={category}>
    <IonItem>
      <IonLabel>{category}</IonLabel>
    </IonItem>
    {carList.map((car, index) => (
      <IonItem key={index}>
        <IonLabel>{car.name}</IonLabel>
        <IonButton onClick={() => handleOpenModal(car)}>Mais informações</IonButton>
      </IonItem>
    ))}
  </IonList>
))}

        {/* Modal */}
        {selectedCar && (
          <IonModal isOpen={showModal} onDidDismiss={handleCloseModal}>
            <IonContent>
              <IonTitle>{selectedCar.name}</IonTitle>
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
              {/* Botão de fechar modal */}
              <IonButton onClick={handleCloseModal}>Fechar</IonButton>
            </IonContent>
          </IonModal>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Frota;
