import React from 'react';
import { FaCar } from 'react-icons/fa';
import { Container, Body, Title, ListContainer } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CarItem from '../../components/CarItem';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body>
        <React.Fragment>
          <Title>
            <FaCar className="titleIcon" size={24} color={"#FFF"} />
            <h1>Nossos Veículos</h1>
          </Title>
          <ListContainer>
            <CarItem />
            <CarItem />
            <CarItem />
            <CarItem />
            <CarItem />
            <CarItem />
          </ListContainer>
        </React.Fragment>
      </Body>
      <Footer />
    </Container>
  );
}

export default Home;