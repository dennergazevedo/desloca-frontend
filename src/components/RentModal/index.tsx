import React, { useState, useMemo, useCallback, useContext } from 'react';
import { Context } from '../../context';
import { toast as alert } from 'react-toastify';
import InputMask from 'react-input-mask';
import Modal from '@mui/material/Modal';
import CarItem from '../CarItem';
import api from '../../api';

import { 
  Body 
} from './styles';

const RentModal: React.FC<RentModalProps> = ({ car }: RentModalProps) => {
  const { user, update } = useContext(Context);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dataAlocacao, setDataAlocacao] = useState<string>('');
  const [dataDevolucao, setDataDevolucao] = useState<string>('');
  const [dataError, setDataError] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen)

  const totalDays = useCallback((now: Date, past: Date) => {
    const diff = Math.abs(now.getTime() - past.getTime());
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
  }, [] )

  const total = useMemo(() => {
    const now = new Date(dataAlocacao.toString().split("/").reverse().join("-"));
    const past = new Date(dataDevolucao.toString().split("/").reverse().join("-"));
    if(now.getTime() > past.getTime()){
      setDataError(true);
      return 0;
    }else{
      setDataError(false);
      return Number(car.price) * totalDays(now, past)
    }
  }, [totalDays, car, dataAlocacao, dataDevolucao])

  async function handleRent(){
    try{
      const response = await api.post('/alugar', {
        carroPlaca: car.placa,
        clienteCnh: user.cnh,
        dataAlocacao: new Date(dataAlocacao.toString().split("/").reverse().join("-")),
        dataDevolucao: new Date(dataDevolucao.toString().split("/").reverse().join("-")), 
        ativo: true
      });
      if(response.data.history.id){
        alert.success('Carro reservado com sucesso!');
        toggle();
        update();
      }else{
        alert.error('Falha ao alugar veículo, tente novamente mais tarde!');
      }
    }catch(err){
      alert.error('Falha ao alugar veículo, verifique os dados e tente novamente!');
    }
  }

  return (
    <>
      <CarItem toggle={toggle} car={car}/>
      <Modal
        open={isOpen}
        onClose={toggle}
      >
        <Body>
          <h3 className="carTitle">{car.modelo}</h3>
          <p className="price">R${Number(car.price).toFixed(2)}/dia</p>
          <hr className="divider" />
          <InputMask 
            className="input"
            mask="99/99/9999" 
            placeholder="Data da retirada"
            value={dataAlocacao}
            onChange={e => setDataAlocacao(e.target.value)}
          />
          <InputMask 
            className="input"
            mask="99/99/9999" 
            placeholder="Data da entrega"
            value={dataDevolucao}
            onChange={e => setDataDevolucao(e.target.value)}
          />
          <label className="valueLabel">
            Valor final
          </label>
          <div className="value">
            {
              dataError?
              'A data de entrega deve ser maior que a de retirada.'
              :
              `R$${isNaN(total) ? Number(0).toFixed(2) : Number(total).toFixed(2)}`
            }
          </div>
          <button className="confirmRent" disabled={isNaN(total) || total === 0} onClick={handleRent}>
            Reservar
          </button>
          <button className="cancelRent" onClick={() => setIsOpen(false)}>
            Cancelar
          </button>
        </Body>
      </Modal>
    </>
  );
}

export default RentModal;