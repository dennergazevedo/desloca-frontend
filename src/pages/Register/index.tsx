import React from 'react';
import InputMask from 'react-input-mask';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { 
  Container, 
  Body, 
  RegisterContainer,
} from './styles';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  return (
    <Container>
      <Header/>
      <Body>
        <RegisterContainer>
          <h1 className="title">Cadastre-se</h1>
          <hr className="divider"/>
          <input 
            className="input" 
            type="text"
            placeholder="Nome Completo"
          />
          <InputMask 
            mask="(99)9 9999-9999" 
            className="input"
            placeholder="Celular"
          />
          <InputMask 
            mask="99999999999" 
            className="input"
            placeholder="CNH"
          />
          <input 
            className="input" 
            type="email"
            placeholder="exemplo@email.com"
          />
          <input 
            className="input" 
            type="password"
            placeholder="********"
          />
          <button className="loginButton" type="submit">
            Cadastrar-se
          </button>
          <Link className="link" to="/login">
            Já é cadastrado? Entre agora!
          </Link>
        </RegisterContainer>
      </Body>
      <Footer />
    </Container>
  );
}

export default Register;