import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RentModal from '../../components/RentModal';

import { FaCar } from 'react-icons/fa';
import { 
  Container, 
  Body, 
  Title, 
  ListContainer 
} from './styles';

const ClientRent: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body>
        <React.Fragment>
          <Title>
            <FaCar className="titleIcon" size={24} color={"#FFF"} />
            <h1>Escolha o seu veículo</h1>
          </Title>
          <ListContainer>
            <RentModal car={{} as ICar}/>
          </ListContainer>
        </React.Fragment>
      </Body>
      <Footer />
    </Container>
  );
}

export default ClientRent;