import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  width: 80vw;
  min-width: 250px;
  margin: 16px 0px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 8px 24px;
  background-image: linear-gradient(#045007,#00aa2b);

  .titleIcon{
    margin-right: 8px;
  }

  h1{
    font-size: 20px;
    color: #fff;
    cursor: default;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 16px 0px;
  width: 100%;
  height: 100%;

  .paymentItem{
    display: flex;
    flex: row;
    align-items: center;
    justify-content: center;
  }

  .paymentIcon{
    margin-right: 8px;
  }

  .paymentDescription{
    font-size: 14px;
  }
`;