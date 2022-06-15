/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { toast as alert } from 'react-toastify';
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
  const [newDevolutionDate, setNewDevolutionDate] = useState<string>('');
  
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
  }, [currentHistory, getUser, setCurrentUser])

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

  const dataAlocacao = useMemo(() => {
    const date = new Date(currentHistory.dataAlocacao);
    return `${
      ("00" + date.getDate()).slice(-2)
    }/${
      ("00" + (date.getMonth() + 1)).slice(-2)
    }/${
      ("0000" + date.getFullYear()).slice(-4)
    }`
  }, [currentHistory])

  const dataDevolucao = useMemo(() => {
    const date = new Date(currentHistory.dataDevolucao);
    return `${
      ("00" + date.getDate()).slice(-2)
    }/${
      ("00" + (date.getMonth() + 1)).slice(-2)
    }/${
      ("0000" + date.getFullYear()).slice(-4)
    }`
  }, [currentHistory])

  const handleDevolve = useCallback(async () => {
    try{
      await api.post('/devolver', {
        id: currentHistory.id,
        carroPlaca: currentHistory.carroPlaca,
        clienteCnh: currentHistory.clienteCnh,
        dataAlocacao: currentHistory.dataAlocacao,
        dataDevolucao: new Date(),
        ativo: false
      });
      alert.success(`Carro devolvido com sucesso! Valor à receber: R$${total.toFixed(2)}`);
      setTimeout(function(){window.location.reload();}, 3000)
    }catch(err){
      alert.error(`Falha ao devolver veículo, tente novamente.`);
    }
  }, [currentHistory])

  const handleRenovate = useCallback(async () => {
    try{
      const fixDate = newDevolutionDate.toString().split("/").reverse().join("-");
      await api.post('/renovate', {
        id: currentHistory.id,
        dataDevolucao: new Date(fixDate),
        ativo: true
      })
      alert.success("Aluguel renovado com sucesso!");
      toggle();
      setTimeout(function() {
        window.location.reload();
      }, 3000)
    }catch(err){
      alert.error("Falha na renovação, tente novamente!");
    }
  }, [newDevolutionDate, currentHistory])

  useEffect(() => {
    getCarActiveHistory();
  }, [])

  useEffect(() => {
    setNewDevolutionDate(dataDevolucao);
  }, [dataDevolucao])

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
            value={dataAlocacao}
          />
          {
            Number(dataDevolucao.split('/')[2]) < 2000 ?
            <h4 className="carTitle">Data de devolução não acordada</h4>
            :
            <InputMask 
              className="input"
              mask="99/99/9999" 
              value={newDevolutionDate}
              onChange={e => setNewDevolutionDate(e.target.value)}
            />
          }
          <div className="buttonContainer">
            {
              Number(dataDevolucao.split('/')[2]) > 2000 &&
              <button 
                className="renovateCartButtom"
                onClick={handleRenovate}
              >
                Renovar
              </button>
            }
            <button 
              className="returnCartButtom"
              onClick={handleDevolve}
            >
              Devolver
            </button>
          </div>
        </Body>
      </Modal>
    </>
  );
}

export default ManageItem;