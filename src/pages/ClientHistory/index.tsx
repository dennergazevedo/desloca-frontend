import React, { useContext } from 'react';
import { Context } from '../../context';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HistoryItem from '../../components/HistoryItem';

import { BiHistory } from 'react-icons/bi';

import { 
  Container, 
  Body, 
  Title, 
  ListContainer 
} from './styles';

const ClientHistory: React.FC = () => {
  const { cars, history } = useContext(Context);

  return (
    <Container>
      <Header />
      <Body>
        <React.Fragment>
          <Title>
            <BiHistory className="titleIcon" size={24} color={"#FFF"} />
            <h1>Meu histórico</h1>
          </Title>
          <ListContainer>
            {
              history.length === 0 &&
              <span>Você ainda não alugou nenhum veículo.</span>
            }
            {
              history.map(history => {
                return <HistoryItem key={history.carroPlaca} cars={cars} history={history} />
              })
            }
          </ListContainer>
        </React.Fragment>
      </Body>
      <Footer />
    </Container>
  );
}

export default ClientHistory;