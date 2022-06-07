import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import Modal from '@mui/material/Modal';
import CarItem from '../CarItem';

import { 
  Body 
} from './styles';

const ManageItem: React.FC<ManageItemProps> = ({ car }: ManageItemProps) => {
  
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <CarItem toggle={toggle} car={car} />
      <Modal
        open={isOpen}
        onClose={toggle}
      >
        <Body>
          <h3 className="carTitle">HB20</h3>
          {
            car.status === "DISPONIVEL"?
            <input className="input m_top" placeholder="CNH do Cliente"/>
            :
            <p className="client">João Silva</p>
          }
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
          {
            car.status === "DISPONIVEL" ?
            <div className="buttonContainer">
              <button className="renovateCartButtom">
                Alugar
              </button>
            </div>
            :
            <div className="buttonContainer">
              <button className="renovateCartButtom">
                Renovar
              </button>
              <button className="returnCartButtom">
                Devolver
              </button>
            </div>
          }
        </Body>
      </Modal>
    </>
  );
}

export default ManageItem;