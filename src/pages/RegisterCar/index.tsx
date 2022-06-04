import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import car from '../../assets/car-example.png';

import { 
  Container, 
  Body, 
  ContactContainer 
} from './styles';

const RegisterCar: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body>
        <ContactContainer>
          <div className="registerCarImageContainer">
            <img src={car} alt="carro" className="exampleCar"/>
          </div>
          <form className="registerCarForm">
            <h1 className="title">Cadastrar Veículo</h1>
            <input className="input" placeholder="Nome do veículo"/>
            <input className="input" placeholder="Link da Imagem"/>
            <input className="input" placeholder="Marca"/>
            <input className="input" type="number" placeholder="Ano"/>
            <input className="input" placeholder="Placa"/>
            <input className="input" placeholder="Cor"/>
            <input className="input" placeholder="Motor"/>
            <button className="sendButton" type="submit">
              Enviar
            </button>
          </form>
        </ContactContainer>
      </Body>
      <Footer />
    </Container>
  );
}

export default RegisterCar;