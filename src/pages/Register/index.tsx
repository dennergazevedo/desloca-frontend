import React, { FormEvent, useCallback, useState } from 'react';
import { toast as alert } from 'react-toastify';
import InputMask from 'react-input-mask';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { 
  Container, 
  Body, 
  RegisterContainer,
} from './styles';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api';

const Register: React.FC = () => {

  const navigate = useNavigate();
  const [newUser, setNewUser] = useState<INewUser>({} as INewUser);
  
  const handleRegister = useCallback(async (event: FormEvent) => {
    event.preventDefault();
    try{
      const response = await api.post('/cliente', {
        ...newUser,
        isAdmin: false 
      })
      if(response.data.email){
        alert.success('Usuário cadastrado com sucesso!');
        setTimeout(function(){
          navigate('/login')
        }, 5000)
      }else{
        alert.error('Erro ao cadastrar, revise seus dados e tente novamente!');
      }
    }catch(err){
      alert.error('Erro ao cadastrar, revise seus dados e tente novamente!');
    }
  }, [newUser, navigate])

  return (
    <Container>
      <Header/>
      <Body>
        <RegisterContainer onSubmit={handleRegister}>
          <h1 className="title">Cadastre-se</h1>
          <hr className="divider"/>
          <input 
            className="input" 
            type="text"
            placeholder="Nome Completo"
            value={newUser.nome}
            onChange={e => setNewUser({
              ...newUser,
              nome: e.target.value
            })}
          />
          <InputMask 
            mask="(99)9 9999-9999" 
            className="input"
            placeholder="Celular"
            value={newUser.telefone}
            onChange={e => setNewUser({
              ...newUser,
              telefone: e.target.value
            })}
          />
          <InputMask 
            mask="99999999999" 
            className="input"
            placeholder="CNH"
            value={newUser.cnh}
            onChange={e => setNewUser({
              ...newUser,
              cnh: e.target.value
            })}
          />
          <input 
            className="input" 
            type="email"
            placeholder="exemplo@email.com"
            value={newUser.email}
            onChange={e => setNewUser({
              ...newUser,
              email: e.target.value
            })}
          />
          <input 
            className="input" 
            type="password"
            placeholder="********"
            value={newUser.senhaAcesso}
            onChange={e => setNewUser({
              ...newUser,
              senhaAcesso: e.target.value
            })}
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