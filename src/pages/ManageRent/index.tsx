import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Context } from '../../context';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ManageItem from '../../components/ManageItem';

import { FaCar } from 'react-icons/fa';
import { BiSearchAlt2 } from 'react-icons/bi';

import { 
  Container, 
  Body, 
  Title, 
  ListContainer 
} from './styles';

const ManageRent: React.FC = () => {
  const { cars, history } = useContext(Context);
  const [search, setSearch] = useState<string>('');
  const [rentCars, setRentCars] = useState<ICar[]>([] as ICar[]);

  useEffect(() => {
    setRentCars(cars.filter((car) => car.status !== 'DISPONIVEL'))
  }, [cars])

  const filterCars = useCallback((value: string) => {
    const available = cars.filter((car) => car.status !== 'DISPONIVEL');
    const filtered = available.filter((car) => car.placa.indexOf(value) !== -1)
    setRentCars(filtered);
    setSearch(value);
  }, [cars, setRentCars, setSearch])

  return (
    <Container>
      <Header />
      <Body>
        <React.Fragment>
          <Title>
            <div className="titleItem">
              <FaCar className="titleIcon" size={24} color={"#FFF"} />
              <h1>Veículos alugados</h1>
            </div>
            <div className="titleItem">
              <BiSearchAlt2 className="titleIcon" size={24} color={"#FFF"} />
              <input 
                className="input"
                placeholder="Busque por placa"
                value={search}
                onChange={e => filterCars(e.target.value)}
              />
            </div>
          </Title>
          <ListContainer>
            {
              rentCars.length ?
              rentCars.map(car => {
                return <ManageItem key={car.placa} car={car} history={history}/>
              })
              :
              <span>Nenhum veículo alugado.</span>
            }
          </ListContainer>
        </React.Fragment>
      </Body>
      <Footer />
    </Container>
  );
}

export default ManageRent;