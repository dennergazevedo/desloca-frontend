import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context';

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
  const { cars } = useContext(Context);

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
            {
              cars.map(car => {
                return <RentModal key={car.placa} car={car}/>
              })
            }
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