import React, { useState, useContext, FormEvent } from 'react';
import { toast as alert } from 'react-toastify';
import { Context } from '../../context';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { 
  Container, 
  Body, 
  LoginContainer,
} from './styles';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api';

const Login: React.FC = () => {
  const navigate = useNavigate ();
  const { setUser } = useContext(Context);
  const [loginData, setLoginData] = useState<ILogin>({} as ILogin);

  async function handleLogin(event: FormEvent){
    event.preventDefault();
    try{
      const { data }: IResponse = await api.post('/login', {
        email: loginData.email,
        senhaAcesso: loginData.password
      })
      if(data.email){
        localStorage.setItem('user', JSON.stringify(data))
        setUser(data);
        alert.success('Usuário logado com sucesso!');
        setTimeout(function(){
          navigate('/')
        }, 5000)
      }else{
        alert.error('Não autorizado! Verifique os dados e tente novamente.');
      }
    }catch(err){
      alert.error('Ops! Ocorreu um erro, tente novamente!');
    }
  }

  return (
    <Container>
      <Header/>
      <Body>
        <LoginContainer onSubmit={handleLogin}>
          <h1 className="title">Área do Cliente</h1>
          <hr className="divider"/>
          <input 
            className="input" 
            type="email"
            placeholder="exemplo@email.com"
            value={loginData.email}
            onChange={e => setLoginData({
              ...loginData,
              email: e.target.value
            })}
          />
          <input 
            className="input" 
            type="password"
            placeholder="********"
            value={loginData.password}
            onChange={e => setLoginData({
              ...loginData,
              password: e.target.value
            })}
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