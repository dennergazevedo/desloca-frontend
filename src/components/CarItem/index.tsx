import React from 'react';
import { 
  Container, 
  ImageContainer, 
  DescriptionContainer 
} from './styles';

/* TEMP */
import hb20 from '../../assets/hb20.jpg';

const CarItem: React.FC = () => {
  return (
    <Container>
      <ImageContainer>
        <img src={hb20} alt="Carro" />
      </ImageContainer>
      <DescriptionContainer>
        <h3 className="name">HB20</h3>
        <p className="description">
          <strong>Fabricante:</strong> Hyundai
        </p>
        <p className="description">
          <strong>Ano:</strong> 2022
        </p>
        <p className="description">
          <strong>Cor:</strong> Preto
        </p>
        <p className="description">
          <strong>Motor:</strong> 1.6
        </p>
      </DescriptionContainer>
    </Container>
  );
}

export default CarItem;