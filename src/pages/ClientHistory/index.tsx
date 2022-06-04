import React from 'react';
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

const CLientHistory: React.FC = () => {
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
            <HistoryItem />
            <HistoryItem />
            <HistoryItem />
            <HistoryItem />
            <HistoryItem />
            <HistoryItem />
          </ListContainer>
        </React.Fragment>
      </Body>
      <Footer />
    </Container>
  );
}

export default CLientHistory;