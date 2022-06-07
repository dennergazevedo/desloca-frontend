import React, { useContext } from 'react';
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
import { Context } from '../../context';

const ClientRent: React.FC = () => {
  const {cars} = useContext(Context);

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
            {
              cars.map(car => {
                return <RentModal key={car.placa} car={car}/>
              })
            }
          </ListContainer>
        </React.Fragment>
      </Body>
      <Footer />
    </Container>
  );
}

export default ClientRent;