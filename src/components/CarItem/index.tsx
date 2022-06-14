import React, { useCallback } from 'react';
import { toast as alert } from 'react-toastify';
import { 
  Container, 
  ImageContainer, 
  DescriptionContainer 
} from './styles';

const CarItem: React.FC<ICarItem> = ({ toggle, car, manage }: ICarItem) => {

  const handleIndisponivel = useCallback(() => {
    alert.error('Este carro está indisponível!');
  }, [])

  return (
    <Container 
      onClick={
        manage ? toggle : 
          car.status === 'INDISPONIVEL'? handleIndisponivel : 
            toggle
      } 
      status={manage ? "DISPONIVEL" : car.status}
    >
      <ImageContainer>
        <img src={car.image} alt={car.modelo} />
      </ImageContainer>
      <DescriptionContainer>
        <h3 className="name">{car.modelo}</h3>
        <p className="description">
          <strong>Fabricante:</strong> {car.marca}
        </p>
        <p className="description">
          <strong>Ano:</strong> {car.ano}
        </p>
        <p className="description">
          <strong>Cor:</strong> {car.cor}
        </p>
        <p className="description">
          <strong>Motor:</strong> {car.motor}
        </p>
      </DescriptionContainer>
    </Container>
  );
}

export default CarItem;