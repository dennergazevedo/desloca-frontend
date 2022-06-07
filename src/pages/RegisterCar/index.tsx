import React, { useState, useContext, useCallback } from 'react';
import { toast as alert } from 'react-toastify';
import { Context } from '../../context';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import api from '../../api';

import carImage from '../../assets/car-example.png';

import { 
  Container, 
  Body, 
  ContactContainer 
} from './styles';

const RegisterCar: React.FC = () => {
  const { update } = useContext(Context)
  const [car, setCar] = useState<ICar>({} as ICar);

  const handleRegisterCar = useCallback(async () => {
    try{
      const response = await api.post('/carro', {
        ...car,
        status: "DISPONIVEL"
      })
      if(response.data.placa){
        update();
        setCar({} as ICar);
        alert.success('Carro cadastrado com sucesso!');
      }
    }catch(err){
      alert.error('Falha ao cadastrar veículo, verifique os dados e tente novamente!');
    }
  }, [car, update])
  
  return (
    <Container>
      <Header />
      <Body>
        <ContactContainer>
          <div className="registerCarImageContainer">
            <img src={carImage} alt="carro" className="exampleCar"/>
          </div>
          <form className="registerCarForm">
            <h1 className="title">Cadastrar Veículo</h1>
            <input 
              className="input" 
              placeholder="Nome do veículo"
              value={car.modelo}
              onChange={e => setCar({
                ...car,
                modelo: e.target.value
              })}
            />
            <input 
              className="input" 
              placeholder="Link da Imagem"
              value={car.image}
              onChange={e => setCar({
                ...car,
                image: e.target.value
              })}
            />
            <input 
              className="input" 
              placeholder="Marca"
              value={car.marca}
              onChange={e => setCar({
                ...car,
                marca: e.target.value
              })}
            />
            <input 
              className="input" 
              placeholder="Ano"
              value={car.ano}
              type="number"
              onChange={e => setCar({
                ...car,
                ano: Number(e.target.value)
              })}
            />
            <input 
              className="input" 
              placeholder="Placa"
              value={car.placa}
              onChange={e => setCar({
                ...car,
                placa: e.target.value
              })}
            />
            <input 
              className="input" 
              placeholder="Cor"
              value={car.cor}
              onChange={e => setCar({
                ...car,
                cor: e.target.value
              })}
            />
            <input 
              className="input" 
              placeholder="Motor"
              value={car.motor}
              type="number"
              onChange={e => setCar({
                ...car,
                motor: Number(e.target.value)
              })}
            />
            <input 
              className="input"
              placeholder="Preço"
              type="number"
              value={car.price}
              onChange={e => setCar({
                ...car,
                price: Number(e.target.value)
              })}
            />
            <button className="sendButton" onClick={handleRegisterCar}>
              Cadastrar
            </button>
          </form>
        </ContactContainer>
      </Body>
      <Footer />
    </Container>
  );
}

export default RegisterCar;