import React from 'react';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { GiMoneyStack } from 'react-icons/gi';
import { BsFillCreditCard2FrontFill } from 'react-icons/bs';
import { MdSendToMobile } from 'react-icons/md';

import { Container, ListContainer } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
        <div className="itemContainer">
          <p>Website produzido por Desloca LTDA.</p>
          <strong>© 2022 Todos os direitos reservados.</strong>
        </div>

        <div className="itemContainer">
          <div className="paymentTitle">
            <RiSecurePaymentLine className="titleIcon" size={16} color={"#FFF"} />
            <h3>Formas de Pagamento</h3>
          </div>
          <ListContainer>
            <div className="paymentItem">
              <GiMoneyStack className="paymentIcon" size={20} color={"#FFF"}/>
              <p className="paymentDescription">Dinheiro</p>
            </div>
            <div className="paymentItem">
              <BsFillCreditCard2FrontFill className="paymentIcon" size={20} color={"#FFF"}/>
              <p className="paymentDescription">Cartões</p>
            </div>

            <div className="paymentItem">
              <MdSendToMobile className="paymentIcon" size={20} color={"#FFF"}/>
              <p className="paymentDescription">PIX</p>
            </div>
          </ListContainer>
        </div>
    </Container>
  );
}

export default Footer;