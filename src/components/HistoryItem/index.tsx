import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import Modal from '@mui/material/Modal';
import CarItem from '../CarItem';

import { 
  Body 
} from './styles';

const HistoryItem: React.FC = () => {

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
          <hr className="divider" />
          <InputMask 
            className="input"
            mask="99/99/9999" 
            disabled
            placeholder="Data da retirada"
          />
          <InputMask 
            className="input"
            mask="99/99/9999" 
            disabled
            placeholder="Data da entrega"
          />
          <label className="valueLabel">
            Valor pago
          </label>
          <div className="value">
            R$500,00
          </div>
        </Body>
      </Modal>
    </>
  );
}

export default HistoryItem;