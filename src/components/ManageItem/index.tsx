import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import Modal from '@mui/material/Modal';
import CarItem from '../CarItem';

import { 
  Body 
} from './styles';

const RentModal: React.FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <CarItem toggle={toggle} car={{} as ICar} />
      <Modal
        open={isOpen}
        onClose={toggle}
      >
        <Body>
          <h3 className="carTitle">HB20</h3>
          <p className="client">João Silva</p>
          <div className="value">R$500,00</div>
          <hr className="divider" />
          <InputMask 
            className="input"
            mask="99/99/9999" 
            placeholder="Data do vencimento"
          />
          <InputMask 
            className="input"
            mask="99/99/9999" 
            placeholder="Data de renovação"
          />
          <div className="buttonContainer">
            <button className="renovateCartButtom">
              Renovar
            </button>
            <button className="returnCartButtom">
              Devolver
            </button>
          </div>
        </Body>
      </Modal>
    </>
  );
}

export default RentModal;