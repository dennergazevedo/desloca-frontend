import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 320px;
  background-color: #FFF;
  border-radius: 8px;
  margin: auto;
  position: absolute;
  top: calc(50% - 160px);
  left: calc(50% - 160px);
  padding: 16px 32px;

  .carTitle{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 16px;
    width: 100%;
    height: 40px;
    border-radius: 0px 8px 0px 8px;
    background-color: #3331;
  }

  .price{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

  }

  .divider{
    width: 100%;
    border-bottom: 1px solid #3332;
    margin: 16px 0px;
    margin-bottom: 32px;
  }

  .input{
    border-bottom: 1px solid #3333;
    border-left: 1px solid #3333;
    border-radius: 4px;
    width: 100%;
    padding: 8px 16px;
    margin-bottom: 8px;
    font-size: 14px;
    color: #333;
  }

  .valueLabel{
    font-size: 16px;
    text-transform: lowercase;
    font-variant: small-caps;
    margin-top: 16px;
    margin-bottom: 4px;
    margin-left: 4px;
  }

  .value{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    border-radius: 0px 8px 0px 8px;
    background-color: #333;
    color: #FFF;
    cursor: default;
  }

  .confirmRent{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    border-radius: 8px;
    background-color: #00aa2b;
    color: #FFF;
    transition: 0.2s all;
    margin-top: 16px;

    &:hover{
      transition: 0.5s all;
      background-color: #045007;
    }
  }

  @media (min-width: 600px){
    width: 400px;
    height: 320px;
    top: calc(50% - 160px);
    left: calc(50% - 200px);
  }
`;