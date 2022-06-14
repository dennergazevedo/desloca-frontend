/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState, useEffect, useMemo } from 'react';
import InputMask from 'react-input-mask';
import Modal from '@mui/material/Modal';
import CarItem from '../CarItem';
import api from '../../api';

import { 
  Body 
} from './styles';

const ManageItem: React.FC<ManageItemProps> = ({ car, history }: ManageItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentHistory, setCurrentHistory] = useState<IHistory>({} as IHistory);
  const [currentUser, setCurrentUser] = useState<IUser>({} as IUser);
  
  const toggle = () => setIsOpen(!isOpen)

  async function getUser(cnh: string): Promise<IUser>{
    try{
      const response = await api.get(`/cliente/${cnh}`);
      return response.data;
    }catch(err){
      console.log("Falha ao buscar cliente:", err);
      return {} as IUser
    }
  }

  const getCarActiveHistory = useCallback(async () => {
    history.forEach(reg => {
      if(reg.ativo && car.placa === reg.carroPlaca){
        setCurrentHistory(reg);
      }
    })
  }, [history, car])

  const loadUser = useCallback(async () => {
    try{
      const user = await getUser(currentHistory.clienteCnh);
      setCurrentUser(user);
    }catch(err){
      console.log("Falha ao localizar cliente!");
    }
  }, [currentHistory])

  const totalDays = useCallback((now: Date, past: Date) => {
    const diff = Math.abs(now.getTime() - past.getTime());
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
  }, [] )

  const total = useMemo(() => {
    const now = new Date(currentHistory.dataAlocacao);
    const past = new Date(currentHistory.dataDevolucao?? new Date());

    return Number(car.price) * totalDays(now, past)
  }, [totalDays, car, currentHistory])

  useEffect(() => {
    getCarActiveHistory();
  }, [])

  useEffect(() => {
    loadUser();
  }, [currentHistory])

  return (
    <>
      <CarItem toggle={toggle} car={car} manage/>
      <Modal
        open={isOpen}
        onClose={toggle}
      >
        <Body>
          <h3 className="carTitle">{car.modelo}</h3>
          <p className="client">{currentUser.nome}</p>
          <div className="value">R${total.toFixed(2)}</div>
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

export default ManageItem;