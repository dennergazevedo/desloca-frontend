import React, { useContext, useMemo } from 'react';
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
  const { cars, history, user } = useContext(Context);

  const myHistory = useMemo(() => {
    return history.filter(ht => ht.clienteCnh === user.cnh)
  }, [user, history])

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
              myHistory.length === 0 &&
              <span>Você ainda não alugou nenhum veículo.</span>
            }
            {
              myHistory.map(history => {
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