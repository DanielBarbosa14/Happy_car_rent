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
            <li>Estilo clássico e atemporal, com ênfase na eficiência aerodinâmica.</li>
            <li>Linhas elegantes e detalhes modernos.</li>
            <li>Possíveis opções de pintura e acabamento.</li>
          </ul>

          <p>
            <strong>Interior Espaçoso e Confortável:</strong>
          </p>
          <ul>
            <li>Interior projetado para maximizar o espaço e o conforto.</li>
            <li>Materiais de qualidade e assentos ergonômicos.</li>
            <li>Configuração prática e funcional.</li>
          </ul>

          <p>
            <strong>Tecnologia Avançada:</strong>
          </p>
          <ul>
            <li>Sistema de infoentretenimento intuitivo.</li>
            <li>Conectividade com smartphones através de recursos como Apple CarPlay e Android Auto.</li>
            <li>Recursos de segurança avançados, como assistência de frenagem de emergência.</li>
          </ul>

          <p>
            <strong>Opção Popular de Aluguer:</strong>
          </p>
          <ul>
            <li>Pode ser uma escolha popular para aluguer, oferecendo economia e confiabilidade.</li>
            <li>Opções de pacotes de aluguer acessíveis.</li>
            <li>Manutenção inclusa e outras vantagens.</li>
          </ul>
        </>
      ),
      technicalData: (
    <>
      <p>
        <strong>Dados Técnicos:</strong>
      </p>
      <ul>
        <li>Motores eficientes para economia de combustível.</li>
        <li>Opções de transmissão manual ou automática.</li>
        <li>Desempenho equilibrado para atender às necessidades do dia a dia.</li>
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
          <li>Estilo arrojado e esportivo, com elementos distintivos do Type R.</li>
          <li>Acentos agressivos, grade frontal distinta e detalhes aerodinâmicos.</li>
          <li>Possíveis opções de pintura e acabamentos esportivos.</li>
        </ul>

        <p>
          <strong>Interior Espaçoso e Confortável:</strong>
        </p>
        <ul>
          <li>Interior mais minimalista, com foco em performance.</li>
          <li>Assentos esportivos de apoio para proporcionar conforto durante a condução dinâmica.</li>
          <li>Espaço adequado para passageiros, mantendo a essência esportiva.</li>
        </ul>

        <p>
          <strong>Tecnologia Avançada:</strong>
        </p>
        <ul>
          <li>Sistema de infoentretenimento com foco na conectividade.</li>
          <li>Recursos de assistência ao motorista, como alerta de colisão e sistema de frenagem automática.</li>
          <li>Cluster de instrumentos digital personalizável.</li>
        </ul>

        <p>
          <strong>Opção Popular de Aluguer:</strong>
        </p>
        <ul>
          <li>Pode ser uma opção popular para entusiastas de carros esportivos.</li>
          <li>Pacotes de aluguer acessíveis e vantajosos.</li>
          <li>Manutenção inclusa para maior conveniência.</li>
        </ul>
      </>
    ),
    technicalData: (
  <>
    <p>
      <strong>Dados Técnicos:</strong>
    </p>
    <ul>
      <li>Motor de alto desempenho para uma experiência esportiva.</li>
      <li>Transmissão manual para maior controle.</li>
      <li>Suspensão ajustada para melhor manuseio.</li>
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
            <li>Estilo inspirado nas linhas modernas e elegantes da Acura.</li>
            <li>Detalhes aerodinâmicos e distintivos.</li>
            <li>Possíveis opções de pintura e acabamento premium.</li>
          </ul>
  
          <p>
            <strong>Interior Espaçoso e Confortável:</strong>
          </p>
          <ul>
            <li>Interior projetado para oferecer conforto e espaço.</li>
            <li>Materiais de alta qualidade e assentos ergonômicos.</li>
            <li>Configuração interna prática e funcional.</li>
          </ul>
  
          <p>
            <strong>Tecnologia Avançada:</strong>
          </p>
          <ul>
            <li>Sistema de infoentretenimento de última geração.</li>
            <li>Conectividade avançada, incluindo integração com smartphones.</li>
            <li>Recursos de assistência ao motorista, como frenagem de emergência.</li>
          </ul>
  
          <p>
            <strong>Opção Popular de Aluguer:</strong>
          </p>
          <ul>
            <li>Pode ser uma escolha popular para aluguer, oferecendo uma combinação de desempenho e praticidade.</li>
            <li>Opções de pacotes de aluguer acessíveis.</li>
            <li>Manutenção inclusa e outras vantagens.</li>
          </ul>
        </>
      ),
      technicalData: (
    <>
      <p>
        <strong>Dados Técnicos:</strong>
      </p>
      <ul>
        <li>Motor eficiente e potente para desempenho equilibrado.</li>
        <li>Opções de transmissão automática ou manual.</li>
        <li>Tecnologias voltadas para uma condução dinâmica.</li>
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
              <li>Estilo moderno e inovador que reflete a evolução do design Honda.</li>
              <li>Linhas aerodinâmicas e detalhes distintos para uma presença visual marcante.</li>
            </ul>
    
            <p>
              <strong>Interior Espaçoso e Confortável:</strong>
            </p>
            <ul>
              <li>Ambiente interno projetado para oferecer amplo espaço e conforto aos ocupantes.</li>
              <li>Materiais de alta qualidade e acabamentos cuidadosamente escolhidos para aprimorar a experiência do condutor e passageiros.</li>
            </ul>
    
            <p>
              <strong>Tecnologia Avançada:</strong>
            </p>
            <ul>
              <li>Sistema de infoentretenimento com tela tátil de última geração, proporcionando uma experiência interativa e intuitiva.</li>
              <li>Conectividade aprimorada com suporte para Apple CarPlay e Android Auto, mantendo os ocupantes conectados.</li>
              <li>Painel de instrumentos digital de alta resolução, fornecendo informações essenciais ao motorista de forma clara e acessível.</li>
              <li>Conjunto abrangente de recursos de segurança ativa, como sistema de frenagem automática de emergência, assistência de permanência na faixa e controle de cruzeiro adaptativo.</li>
              <li>Sistema de iluminação totalmente em LED, oferecendo visibilidade superior e um toque moderno ao design exterior.</li>
              <li>Controles e interruptores ergonomicamente posicionados para uma experiência de condução intuitiva e sem distrações.</li>
              <li>Versatilidade no espaço de carga para atender às necessidades práticas dos usuários.</li>
              <li>Foco contínuo na eficiência de combustível, alinhado com as demandas crescentes por sustentabilidade.</li>
              <li>Possíveis opções de personalização para permitir que os motoristas escolham recursos e estilos que atendam às suas preferências individuais.</li>
            </ul>
    
            <p>
              <strong>Opção Popular de Aluguer:</strong>
            </p>
            <ul>
              <li>Reconhecido por sua confiabilidade, o 2024 Honda Civic é uma escolha popular para aluguer de veículos.</li>
              <li>Custos acessíveis de aluguer tornam-no atraente para uma variedade de necessidades de mobilidade.</li>
              <li>Manutenção e economia de combustível tornam o Honda Civic uma opção econômica para viagens.</li>
            </ul>
          </>
        ),
        technicalData: (
      <>
        <p>
          <strong>Dados Técnicos:</strong>
        </p>
        <ul>
          <li>Motor: 2.0L, 4 cilindros</li>
          <li>Potência: 143 hp @ 6,000 rpm</li>
          <li>Transmissão: Automática</li>
          <li>Consumo de Combustível: 18.3L/100 (cidade) / 15.9L/100 (estrada)</li>
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
            <li>Linhas elegantes e contornos distintos que caracterizam o design da marca Audi.</li>
            <li>Grade dianteira trapezoidal e elementos de iluminação LED para uma identidade visual forte.</li>
            <li>Design aerodinâmico para otimizar a eficiência de combustível e melhorar o desempenho em altas velocidades.</li>
            <li>Acabamentos refinados, detalhes cromados e jantes de liga leve para um toque de sofisticação.</li>
          </ul>
      
          <p>
            <strong>Interior Espaçoso e Confortável:</strong>
          </p>
          <ul>
            <li>Acabamentos em couro, alumínio e materiais de alta qualidade para um interior luxuoso.</li>
            <li>Design inteligente para oferecer amplo espaço para os ocupantes, tanto à frente quanto atrás.</li>
            <li>Assentos projetados ergonomicamente para oferecer suporte e conforto durante viagens mais longas.</li>
          </ul>
      
          <p>
            <strong>Tecnologia Avançada:</strong>
          </p>
          <ul>
            <li>Sistema de infoentretenimento com tela sensível ao toque, conectividade Bluetooth e navegação por satélite.</li>
            <li>Painel de instrumentos digital personalizável para exibir informações essenciais de forma moderna e interativa.</li>
            <li>Recursos avançados, como controle de cruzeiro adaptativo, assistência de faixa e frenagem automática de emergência.</li>
            <li>Opções de sistemas de som premium para uma experiência de áudio de alta qualidade.</li>
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
            <li>Opções de motores a gasolina ou diesel, com diferentes níveis de potência.</li>
            <li>Aceleração, velocidade máxima e eficiência de combustível dependendo da configuração do motor.</li>
            <li>Opções de transmissão automática ou manual, dependendo da preferência e configuração.</li>
            <li>Variantes com tração dianteira ou integral (Quattro) dependendo da configuração escolhida.</li>
            <li>Sistemas avançados de segurança, como frenagem automática, assistência de estacionamento e monitoramento de ponto cego.</li>
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
            <li>Linhas contemporâneas e design aerodinâmico que refletem a identidade moderna da Chevrolet.</li>
            <li>Grade frontal atraente, faróis distintivos e detalhes cromados para um visual marcante.</li>
            <li>Dimensões compactas para facilitar a condução urbana, sem comprometer a elegância.</li>
          </ul>
      
          <p>
            <strong>Interior Espaçoso e Confortável:</strong>
          </p>
          <ul>
            <li>Interior projetado para otimizar o espaço, proporcionando conforto para motorista e passageiros.</li>
            <li>Acabamentos premium, assentos confortáveis e detalhes cuidadosamente selecionados.</li>
          </ul>
      
          <p>
            <strong>Tecnologia Avançada:</strong>
          </p>
          <ul>
            <li>Tela sensível ao toque para controle fácil e intuitivo.</li>
            <li>Conectividade com smartphones através de Apple CarPlay e Android Auto.</li>
            <li>Recursos de segurança avançados, como frenagem automática de emergência, alerta de colisão e assistência de permanência na faixa.</li>
            <li>Opções de áudio premium, sistema de navegação integrado e conectividade Bluetooth.</li>
          </ul>
      
          <p>
            <strong>Opção de Aluguer Premium:</strong>
          </p>
          <ul>
            <li>Oferta de pacote de aluguer premium, proporcionando benefícios adicionais aos clientes.</li>
            <li>Possíveis vantagens incluem manutenção inclusa, assistência 24 horas e opções de troca de veículo durante o contrato de aluguer.</li>
          </ul>
        </>
      ),      
      technicalData: (
        <>
          <p>
            <strong>Dados Técnicos:</strong>
          </p>
          <ul>
            <li>Motores eficientes em termos de combustível, oferecendo uma combinação de desempenho e economia.</li>
            <li>Opções de transmissão automática ou manual, dependendo da preferência e configuração.</li>
            <li>Aceleração, velocidade máxima e eficiência de combustível adaptadas para atender às necessidades urbanas e rodoviárias.</li>
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
            <li>Linhas modernas e design elegante que representam a estética característica da Honda.</li>
            <li>Grade frontal distintiva, faróis afilados e detalhes aerodinâmicos.</li>
            <li>Design compacto para manobras fáceis na cidade, sem comprometer a funcionalidade.</li>
          </ul>
      
          <p>
            <strong>Interior Espaçoso e Confortável:</strong>
          </p>
          <ul>
            <li>Espaço interno otimizado para proporcionar conforto aos ocupantes.</li>
            <li>Configuração inteligente para otimizar o espaço disponível.</li>
            <li>Acabamentos premium, assentos ergonômicos e detalhes de alta qualidade.</li>
          </ul>
      
          <p>
            <strong>Tecnologia Avançada:</strong>
          </p>
          <ul>
            <li>Tela sensível ao toque com funcionalidades modernas.</li>
            <li>Conectividade com smartphones, como Apple CarPlay e Android Auto.</li>
            <li>Recursos avançados de segurança, como frenagem automática de emergência, controle de cruzeiro adaptativo e alerta de colisão.</li>
            <li>Climatização digital, opções de áudio premium e características tecnológicas para uma experiência de condução confortável.</li>
          </ul>
      
          <p>
            <strong>Opção de Aluguer Premium:</strong>
          </p>
          <ul>
            <li>Possibilidade de pacote de aluguer premium, oferecendo benefícios adicionais para os clientes.</li>
            <li>Benefícios podem incluir manutenção inclusa, assistência 24 horas e opções de troca de veículo durante o período de aluguer.</li>
          </ul>
        </>
      ),      
      technicalData: (
        <>
          <p>
            <strong>Dados Técnicos:</strong>
          </p>
          <ul>
            <li>Motores otimizados para desempenho e eficiência de combustível.</li>
            <li>Opções de transmissão automática ou manual, dependendo da configuração escolhida.</li>
            <li>Aceleração, velocidade máxima e eficiência de combustível adaptados às necessidades urbanas e rodoviárias.</li>
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
            <li>Linhas modernas e design sólido que define a presença do Fiat Grand Siena.</li>
            <li>Detalhes aerodinâmicos e estilizados para uma estética atraente.</li>
            <li>Design compacto e funcional para facilitar a condução urbana e maximizar a eficiência de espaço.</li>
          </ul>
      
          <p>
            <strong>Interior Espaçoso e Confortável:</strong>
          </p>
          <ul>
            <li>Interior otimizado para proporcionar espaço confortável aos ocupantes.</li>
            <li>Configuração interna projetada para oferecer conforto e praticidade.</li>
            <li>Acabamentos interiores cuidadosamente escolhidos para um ambiente agradável.</li>
            <li>Assentos ergonomicamente projetados para suporte e conforto.</li>
          </ul>
      
          <p>
            <strong>Tecnologia Avançada:</strong>
          </p>
          <ul>
            <li>Unidade central com recursos modernos, conectividade Bluetooth e opções de entretenimento.</li>
            <li>Possíveis características, como controle de áudio no volante e integração com dispositivos móveis.</li>
            <li>Recursos de segurança, como airbags, sistema de freios ABS e controle eletrônico de estabilidade.</li>
            <li>Sistema de ar-condicionado eficiente, controles intuitivos e funcionalidades que tornam a condução mais agradável.</li>
          </ul>
      
          <p>
            <strong>Opção de Aluguer Premium:</strong>
          </p>
          <ul>
            <li>Possibilidade de pacote de aluguer premium, oferecendo benefícios adicionais para os clientes.</li>
            <li>Benefícios podem incluir manutenção inclusa, assistência 24 horas e opções de troca de veículo durante o período de aluguer.</li>
          </ul>
        </>
      ),      
      technicalData: (
        <>
          <p>
            <strong>Dados Técnicos:</strong>
          </p>
          <ul>
            <li>Motores otimizados para proporcionar equilíbrio entre desempenho e eficiência de combustível.</li>
            <li>Opções de transmissão manual ou automática, dependendo da configuração escolhida.</li>
            <li>Aceleração, velocidade máxima e eficiência de combustível adaptados às características do veículo.</li>
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
            <li>Estilo distintivo com a assinatura da Mercedes-Benz, combinando elegância e esportividade.</li>
            <li>Grade frontal marcante, linhas fluidas e detalhes cromados para uma presença luxuosa.</li>
            <li>Contornos aerodinâmicos para otimizar a eficiência e melhorar o desempenho.</li>
          </ul>
    
          <p>
            <strong>Interior Espaçoso e Confortável:</strong>
          </p>
          <ul>
            <li>Interior premium com materiais de alta qualidade, couro e detalhes em madeira ou alumínio.</li>
            <li>Espaço bem aproveitado para proporcionar conforto aos ocupantes.</li>
            <li>Assentos projetados ergonomicamente para oferecer suporte e conforto durante viagens longas.</li>
          </ul>
    
          <p>
            <strong>Tecnologia Avançada:</strong>
          </p>
          <ul>
            <li>Sistema de infoentretenimento avançado com MBUX, interface intuitiva e controle por voz.</li>
            <li>Conectividade com smartphones, navegação avançada e integração com assistentes virtuais.</li>
            <li>Suite abrangente de recursos de segurança, incluindo frenagem automática de emergência, assistência de permanência na faixa e controle de cruzeiro adaptativo.</li>
            <li>Opções de sistemas de áudio premium para uma experiência de áudio imersiva.</li>
          </ul>
    
          <p>
            <strong>Opção Premium de Aluguer:</strong>
          </p>
          <ul>
            <li>Possibilidade de pacote de aluguer premium, oferecendo vantagens exclusivas aos clientes.</li>
            <li>Benefícios podem incluir manutenção inclusa, assistência 24 horas, substituição de veículo e serviços adicionais.</li>
          </ul>
        </>
      ),
      technicalData: (
        <>
          <p>
            <strong>Dados Técnicos:</strong>
          </p>
          <ul>
            <li>Motores potentes e eficientes, proporcionando uma combinação de desempenho e economia.</li>
            <li>Opções de transmissão automática de várias velocidades para uma condução suave.</li>
            <li>Aceleração rápida, velocidade máxima e sistemas de suspensão adaptativa para desempenho dinâmico.</li>
            <li>Possíveis opções híbridas para eficiência energética e baixas emissões.</li>
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
            <li>Estilo moderno e distintivo.</li>
            <li>Detalhes aerodinâmicos para eficiência e apelo visual.</li>
            <li>Possíveis atualizações na grade, faróis e outros elementos de design.</li>
          </ul>
    
          <p>
            <strong>Interior Espaçoso e Confortável:</strong>
          </p>
          <ul>
            <li>Ambiente interno otimizado para conforto.</li>
            <li>Espaço bem aproveitado para passageiros e carga.</li>
            <li>Acabamentos de alta qualidade e opções de personalização.</li>
          </ul>
    
          <p>
            <strong>Tecnologia Avançada:</strong>
          </p>
          <ul>
            <li>Sistema de infoentretenimento moderno.</li>
            <li>Integração com smartphones e possíveis avanços no sistema de navegação.</li>
            <li>Recursos de segurança avançados e assistência à condução.</li>
          </ul>
    
          <p>
            <strong>Opção Premium de Aluguer:</strong>
          </p>
          <ul>
            <li>Possibilidade de pacote de aluguer premium.</li>
            <li>Benefícios como manutenção inclusa, assistência 24 horas e serviços adicionais.</li>
          </ul>
        </>
      ),
      technicalData: (
        <>
          <p>
            <strong>Dados Técnicos:</strong>
          </p>
          <ul>
            <li>Motores eficientes e potentes.</li>
            <li>Opções de transmissão automática ou manual.</li>
            <li>Desempenho adaptado para eficiência e experiência de condução.</li>
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
            <li>Estilo contemporâneo e distintivo.</li>
            <li>Possíveis atualizações na grade, faróis e linhas aerodinâmicas.</li>
            <li>Detalhes que combinam elegância e modernidade.</li>
          </ul>
    
          <p>
            <strong>Interior Espaçoso e Confortável:</strong>
          </p>
          <ul>
            <li>Layout interno otimizado para proporcionar conforto aos ocupantes.</li>
            <li>Espaço generoso para passageiros e bagagem.</li>
            <li>Materiais de alta qualidade e design ergonômico.</li>
          </ul>
    
          <p>
            <strong>Tecnologia Avançada:</strong>
          </p>
          <ul>
            <li>Sistema de infoentretenimento avançado.</li>
            <li>Conectividade com smartphones e possíveis recursos de assistência ao motorista.</li>
            <li>Tecnologias inovadoras para aprimorar a experiência de condução.</li>
          </ul>
    
          <p>
            <strong>Opção Premium de Aluguer:</strong>
          </p>
          <ul>
            <li>Oferta de pacote de aluguer premium.</li>
            <li>Benefícios como manutenção inclusa, assistência 24 horas e serviços adicionais.</li>
          </ul>
        </>
      ),
      technicalData: (
        <>
          <p>
            <strong>Dados Técnicos:</strong>
          </p>
          <ul>
            <li>Motores eficientes e opções de trem de força.</li>
            <li>Especificações de desempenho adaptadas para eficiência e desempenho dinâmico.</li>
            <li>Opções de transmissão automática ou manual.</li>
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
            <li>Estilo distintivo e elegante, refletindo a identidade da Maserati.</li>
            <li>Linhas aerodinâmicas e detalhes sofisticados.</li>
            <li>Possíveis opções de pintura e acabamentos premium.</li>
          </ul>
    
          <p>
            <strong>Interior Espaçoso e Confortável:</strong>
          </p>
          <ul>
            <li>Layout interno otimizado para proporcionar conforto.</li>
            <li>Uso de materiais de alta qualidade e acabamentos luxuosos.</li>
            <li>Espaço generoso para passageiros e bagagem.</li>
          </ul>
    
          <p>
            <strong>Tecnologia Avançada:</strong>
          </p>
          <ul>
            <li>Sistema de infoentretenimento de última geração.</li>
            <li>Sistema de infoentretenimento de última geração.</li>
            <li>Tecnologias inovadoras para aprimorar a experiência de condução.</li>
          </ul>
    
          <p>
            <strong>Opção Premium de Aluguer:</strong>
          </p>
          <ul>
            <li>Possibilidade de pacote de aluguer premium.</li>
            <li>Benefícios como manutenção inclusa, assistência 24 horas e serviços adicionais exclusivos.</li>
          </ul>
        </>
      ),
      technicalData: (
        <>
          <p>
            <strong>Dados Técnicos:</strong>
          </p>
          <ul>
            <li>Motorização potente e eficiente.</li>
            <li>Especificações de desempenho adaptadas para uma experiência de condução esportiva.</li>
            <li>Opções de transmissão automática ou manual.</li>
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
            <li>Estilo icônico da BMW, combinando elegância e esportividade.</li>
            <li>Linhas dinâmicas e detalhes aerodinâmicos.</li>
            <li>Opções de design premium, como faróis LED e grade frontal característica.</li>
          </ul>
    
          <p>
            <strong>Interior Espaçoso e Confortável:</strong>
          </p>
          <ul>
            <li>Interior luxuoso com materiais de alta qualidade.</li>
            <li>Espaço otimizado para passageiros e bagagem.</li>
            <li>Assentos ergonômicos e opções de personalização.</li>
          </ul>
    
          <p>
            <strong>Tecnologia Avançada:</strong>
          </p>
          <ul>
            <li>Sistema de infoentretenimento de última geração.</li>
            <li>BMW iDrive com controle intuitivo e tela sensível ao toque.</li>
            <li>Recursos avançados de assistência ao motorista, como controle de cruzeiro adaptativo e assistência de estacionamento.</li>
          </ul>
    
          <p>
            <strong>Opção Premium de Aluguer:</strong>
          </p>
          <ul>
            <li>Possibilidade de pacote de aluguer premium.</li>
            <li>Benefícios como manutenção inclusa, assistência 24 horas e serviços exclusivos.</li>
          </ul>
        </>
      ) as React.ReactNode,
      technicalData: (
        <>
          <p>
            <strong>Dados Técnicos:</strong>
          </p>
          <ul>
            <li>Motores potentes e eficientes.</li>
            <li>Opções de transmissão automática ou manual, dependendo da versão.</li>
            <li>Especificações de desempenho adaptadas para uma experiência de condução dinâmica.</li>
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
            <li>Estilo distintivo e elegante da Cadillac.</li>
            <li>Detalhes aerodinâmicos e design moderno.</li>
            <li>Possíveis opções de acabamento e detalhes cromados.</li>
          </ul>
    
          <p>
            <strong>Interior Espaçoso e Confortável:</strong>
          </p>
          <ul>
            <li>Layout interno otimizado para proporcionar conforto aos ocupantes.</li>
            <li>Materiais de alta qualidade e acabamentos premium.</li>
            <li>Recursos de personalização e espaço para passageiros.</li>
          </ul>
    
          <p>
            <strong>Tecnologia Avançada:</strong>
          </p>
          <ul>
            <li>Sistema de infoentretenimento avançado.</li>
            <li>Integração com smartphones e possíveis recursos de assistência ao motorista.</li>
            <li>Tecnologias inovadoras para aprimorar a experiência de condução.</li>
          </ul>
    
          <p>
            <strong>Opção Premium de Aluguer:</strong>
          </p>
          <ul>
            <li>Possibilidade de pacote de aluguer premium.</li>
            <li>Benefícios como manutenção inclusa, assistência 24 horas e serviços adicionais exclusivos.</li>
          </ul>
        </>
      ) as React.ReactNode,
      technicalData: (
        <>
          <p>
            <strong>Dados Técnicos:</strong>
          </p>
          <ul>
            <li>Motorização eficiente e potente.</li>
            <li>Especificações de desempenho adaptadas para uma condução dinâmica.</li>
            <li>Opções de transmissão automática ou manual, dependendo da versão.</li>
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
            <li>Estilo moderno e aerodinâmico característico dos veículos Tesla.</li>
            <li>Linhas suaves e minimalistas.</li>
            <li>Opções de cores e detalhes personalizáveis.</li>
          </ul>
    
          <p>
            <strong>Interior Espaçoso e Confortável:</strong>
          </p>
          <ul>
            <li>Interior minimalista com foco na simplicidade e elegância.</li>
            <li>Espaço generoso para passageiros e carga.</li>
            <li>Assentos ergonômicos e materiais de alta qualidade.</li>
          </ul>
    
          <p>
            <strong>Tecnologia Avançada:</strong>
          </p>
          <ul>
            <li>Sistema Autopilot: Recurso avançado de assistência ao motorista.</li>
            <li>Tela Central: Display touchscreen para controle intuitivo.</li>
            <li>Conectividade: Integração com aplicativos, atualizações over-the-air e comandos de voz.</li>
          </ul>
    
          <p>
            <strong>Opção Premium de Aluguer:</strong>
          </p>
          <ul>
            <li>Possibilidade de pacote de aluguer premium.</li>
            <li>Benefícios como manutenção inclusa, acesso a recursos avançados e serviços exclusivos.</li>
          </ul>
        </>
      ) as React.ReactNode,
      technicalData: (
        <>
          <p>
            <strong>Dados Técnicos:</strong>
          </p>
          <ul>
            <li>Autonomia: Varia de acordo com a configuração da bateria.</li>
            <li>Desempenho: Aceleração rápida e experiência de condução ágil.</li>
            <li>Bateria: Capacidade e opções de carregamento rápido.</li>
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
            <li>Estilo refinado e elegante característico da Genesis.</li>
            <li>Linhas aerodinâmicas e detalhes distintos.</li>
            <li>Opções de acabamento e detalhes cromados.</li>
          </ul>
    
          <p>
            <strong>Interior Espaçoso e Confortável:</strong>
          </p>
          <ul>
            <li>Layout interno voltado para o conforto e a qualidade.</li>
            <li>Materiais de alta qualidade e acabamentos premium.</li>
            <li>Espaço otimizado para passageiros e carga.</li>
          </ul>
    
          <p>
            <strong>Tecnologia Avançada:</strong>
          </p>
          <ul>
            <li>Sistema de infoentretenimento de última geração.</li>
            <li>Integração com smartphones e possíveis recursos de assistência ao motorista.</li>
            <li>Tecnologias inovadoras para aprimorar a experiência de condução.</li>
          </ul>
    
          <p>
            <strong>Opção Premium de Aluguer:</strong>
          </p>
          <ul>
            <li>Possibilidade de pacote de aluguer premium.</li>
            <li>Benefícios como manutenção inclusa, assistência 24 horas e serviços adicionais exclusivos.</li>
          </ul>
        </>
      ) as React.ReactNode,
      technicalData: (
        <>
          <p>
            <strong>Dados Técnicos:</strong>
          </p>
          <ul>
            <li>Motores potentes e eficientes.</li>
            <li>Especificações de desempenho adaptadas para uma condução dinâmica.</li>
            <li>Opções de transmissão automática ou manual, dependendo da versão.</li>
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