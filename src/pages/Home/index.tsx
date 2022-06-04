import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RentModal from '../../components/RentModal';
import banner from '../../assets/banner-home-01.jpg';

import { FaCar, FaLaptopHouse } from 'react-icons/fa';
import { 
  Container, 
  Body, 
  Title, 
  ListContainer,
  Alugue
} from './styles';

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
            <RentModal />
            <RentModal />
            <RentModal />
            <RentModal />
            <RentModal />
            <RentModal />
          </ListContainer>
          <Link to="/alugar">
            <Alugue>
              <p className="title">
                Alugue de 
                <br />
                <FaLaptopHouse size={60} color={"#FFF"} />
              </p>
              <img 
                className="rentBanner" 
                src={banner} 
                alt="AlugueEmCasa" 
              />
            </Alugue>
          </Link>
        </React.Fragment>
      </Body>
      <Footer />
    </Container>
  );
}

export default Home;