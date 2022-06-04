import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { 
  Container, 
  Body, 
  LoginContainer,
} from './styles';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <Container>
      <Header/>
      <Body>
        <LoginContainer>
          <h1 className="title">Área do Cliente</h1>
          <hr className="divider"/>
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
            Login
          </button>
          <Link className="link" to="/cadastro">
            Não é cadastrado? Cadastre-se!
          </Link>
        </LoginContainer>
      </Body>
      <Footer />
    </Container>
  );
}

export default Login;