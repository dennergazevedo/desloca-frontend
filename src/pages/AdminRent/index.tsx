import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdminRentItem from '../../components/AdminRentItem';

import { FaCar } from 'react-icons/fa';
import { 
  Container, 
  Body, 
  Title, 
  ListContainer 
} from './styles';

const AdminRent: React.FC = () => {
  return (
    <Container>
      <Header />
      <Body>
        <React.Fragment>
          <Title>
            <FaCar className="titleIcon" size={24} color={"#FFF"} />
            <h1>Veículos disponíveis</h1>
          </Title>
          <ListContainer>
            <AdminRentItem />
            <AdminRentItem />
            <AdminRentItem />
            <AdminRentItem />
            <AdminRentItem />
            <AdminRentItem />
          </ListContainer>
        </React.Fragment>
      </Body>
      <Footer />
    </Container>
  );
}

export default AdminRent;