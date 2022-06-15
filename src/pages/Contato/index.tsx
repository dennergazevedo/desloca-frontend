import React from 'react';
import { toast as alert } from 'react-toastify';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import * as emailjs from 'emailjs-com';

import { AiOutlinePhone, AiOutlineClockCircle } from 'react-icons/ai';
import { MdOutlineLocationOn } from 'react-icons/md';

import { 
  Container, 
  Body, 
  ContactContainer 
} from './styles';

const Contato: React.FC = () => {
  
  async function sendMail(e: any) {
    e.preventDefault();
    try{
      await emailjs.sendForm('service_tiiwxtk', 'template_2rk0q0o', e.target, 'yJiKj8QToUeYwWcle')
      e.target.reset();
      alert.success('Contato enviado com sucesso!');
    }catch(err){
      alert.error('Falha ao realizar contato!');
    }
  }

  return (
    <Container>
      <Header />
      <Body>
        <ContactContainer>
          <div className="contactDescriptionContainer">
            <div className="contactDescriptionItem">
              <div className="title">
                <AiOutlinePhone 
                  className="descriptionIcon" 
                  size={20} 
                  color={"#FFF"} 
                />
                <p>Ligue para nós</p>
              </div>
              <p className="description">
                +55 (31) 9 9999-9999, +55 (31) 9 8888-8888
              </p>
            </div>

            <div className="contactDescriptionItem">
              <div className="title">
                <MdOutlineLocationOn 
                  className="descriptionIcon" 
                  size={20} 
                  color={"#FFF"} 
                />
                <p>Localização</p>
              </div>
              <p className="description">
                Rua 36, 115 - Loanda, João Monlevade - MG, 35931-008
              </p>
            </div>

            <div className="contactDescriptionItem">
              <div className="title">
                <AiOutlineClockCircle 
                  className="descriptionIcon" 
                  size={20} 
                  color={"#FFF"} 
                />
                <p>Horário Comercial</p>
              </div>
              <p className="description">
                Segunda-feira à sexta-feira de 8:00 às 18:00 horas.
              </p>
            </div>
          </div>
          <form className="contactForm" onSubmit={sendMail}>
            <h1 className="title">CONTATE-NOS</h1>
            <input name="name" className="input" placeholder="Digite seu nome"/>
            <input name="email" className="input" placeholder="Digite seu melhor e-mail"/>
            <textarea name="message" className="textarea" placeholder="Escreva sua duvida aqui..."/>
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

export default Contato;