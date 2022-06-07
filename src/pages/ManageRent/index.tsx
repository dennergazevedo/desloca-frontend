import React, { useContext } from 'react';
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
  const { cars } = useContext(Context);

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
                placeholder="Busque por cliente"
              />
            </div>
          </Title>
          <ListContainer>
            {
              cars.map(car => {
                return <ManageItem key={car.placa} car={car}/>
              })
            }
          </ListContainer>
        </React.Fragment>
      </Body>
      <Footer />
    </Container>
  );
}

export default ManageRent;