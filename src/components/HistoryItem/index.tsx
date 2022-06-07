import React, { useState, useMemo, useCallback, useEffect } from 'react';
import InputMask from 'react-input-mask';
import Modal from '@mui/material/Modal';
import CarItem from '../CarItem';

import { 
  Body 
} from './styles';

const HistoryItem: React.FC<HistoryItemProps> = ({ cars, history }: HistoryItemProps) => {
  
  const dataAlocacao = useMemo(() => {
    return new Date(history.dataAlocacao)
  }, [history])

  const dataDevolucao = useMemo(() => {
    return new Date(history.dataDevolucao)
  }, [history])

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [car, setCar] = useState<ICar>({} as ICar);

  const totalDays = useCallback((now: Date, past: Date) => {
    const diff = Math.abs(now.getTime() - past.getTime());
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
  }, [] )

  const total = useMemo(() => {
    const now = new Date(dataAlocacao?.toString().split("/").reverse().join("-"));
    const past = new Date(dataDevolucao?.toString().split("/").reverse().join("-"));
    return Number(car.price) * totalDays(now, past);
  }, [totalDays, car, dataAlocacao, dataDevolucao])

  const toggle = () => setIsOpen(!isOpen)

  useEffect(() => {
    const currentCar = cars.find(car => car.placa === history.carroPlaca );
    if(currentCar) setCar(currentCar);
  }, [cars, history])

  return (
    <>
      <CarItem toggle={toggle} car={{...car, status: "DISPONIVEL"}}/>
      <Modal
        open={isOpen}
        onClose={toggle}
      >
        <Body>
          <h3 className="carTitle">{car.modelo}</h3>
          <hr className="divider" />
          <InputMask 
            className="input"
            mask="99/99/9999" 
            disabled
            placeholder="Data da retirada"
            value={`${
              ("00" + dataAlocacao.getDate()).slice(-2)
            }/${
              ("00" + dataAlocacao.getMonth()).slice(-2)
            }/${
              ("0000" + dataAlocacao.getFullYear()).slice(-4)
            }`}
          />
          <InputMask 
            className="input"
            mask="99/99/9999" 
            disabled
            placeholder="Data da entrega"
            value={`${
                      ("00" + dataDevolucao.getDate()).slice(-2)
                    }/${
                      ("00" + dataDevolucao.getMonth()).slice(-2)
                    }/${
                      ("0000" + dataDevolucao.getFullYear()).slice(-4)
                    }`}
          />
          <label className="valueLabel">
            Valor pago
          </label>
          <div className="value">
            R${Number(total).toFixed(2)}
          </div>
        </Body>
      </Modal>
    </>
  );
}

export default HistoryItem;