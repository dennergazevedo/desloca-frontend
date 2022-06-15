import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 360px;
  background-color: #FFF;
  border-radius: 8px;
  margin: auto;
  position: absolute;
  top: calc(50% - 160px);
  left: calc(50% - 160px);
  padding: 16px 32px;

  .m_top{
    margin-top: 16px;
  }

  .carTitle{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    width: 100%;
    height: 40px;
    border-radius: 0px 8px 0px 8px;
    background-color: #3331;
  }

  .client{
    display: flex;
    width: 100%;
    height: 40px;
    background-color: #3332;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    border-radius: 8px 8px 0px 0px;
  }

  .value{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    border-radius: 0px 0px 8px 8px;
    background-color: #333;
    color: #FFF;
    cursor: default;
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

  .buttonContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 16px;
    width: 100%;

    .renovateCartButtom{
      background-color: #00aa2b;
      margin-right: 16px;

      &:hover{
        transition: 0.5s all;
        background-color: #045007;
      }
    }

    .returnCartButtom{
      background-color: #e54;

      &:hover{
        transition: 0.5s all;
        background-color: #bd3020;
      }
    }

    .renovateCartButtom,
    .returnCartButtom{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 40px;
      border-radius: 8px;
      color: #FFF;
      transition: 0.2s all;
    }
  }

  @media (min-width: 600px){
    width: 400px;
    height: 360px;
    top: calc(50% - 180px);
    left: calc(50% - 200px);
  }
`;