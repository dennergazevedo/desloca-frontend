import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import Modal from '@mui/material/Modal';
import CarItem from '../CarItem';

import { 
  Body 
} from './styles';

const AdminRent: React.FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <CarItem toggle={toggle} car={{} as ICar}/>
      <Modal
        open={isOpen}
        onClose={toggle}
      >
        <Body>
          <h3 className="carTitle">HB20</h3>
          <p className="price">R$250,00/dia</p>
          <hr className="divider" />
          <input 
            className="input"
            placeholder="CNH do cliente"
          />
          <InputMask 
            className="input"
            mask="99/99/9999" 
            placeholder="Data da retirada"
          />
          <InputMask 
            className="input"
            mask="99/99/9999" 
            placeholder="Data da entrega"
          />
          <label className="valueLabel">
            Valor final
          </label>
          <div className="value">
            R$500,00
          </div>
          <button className="confirmRent">
            Alugar
          </button>
        </Body>
      </Modal>
    </>
  );
}

export default AdminRent;