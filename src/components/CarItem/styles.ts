import styled from 'styled-components';

interface ContainerProps{
  status: string
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: auto;
  border: 1px solid #3332;
  border-radius: 8px;
  padding: 16px 0px;
  cursor: pointer;
  margin-bottom: 16px;
  opacity: ${props => props.status === "INDISPONIVEL" || props.status === "RESERVADO"? 0.5 : 1};

  &:hover{
    border: 1px solid #3338;
  }

  @media (min-width: 600px){
    width: 400px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 16px;

  img{
    width: 150px;
    height: 100%;
    object-fit: contain;
  }

  @media (min-width: 600px){
    width: 200px;
    height: 100%;

    img{
      width: 200px;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  .name{
    font-size: 20px;
    font-weight: bold;
    color: #333;
    margin-bottom: 8px;
  }

  .description{
    font-size: 14px;
    color: #333;
  }
`;