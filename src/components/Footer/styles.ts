import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: auto;
  color: #fff;
  font-size: 12px;
  padding: 16px;
  text-transform: uppercase;
  font-variant: small-caps;
  background-image: linear-gradient(#045007,#00aa2b);
  z-index: 1;

  .itemContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 12px;

    .paymentTitle{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      .titleIcon{
        margin-right: 8px;
      }

      h3{
        font-size: 12px;
      }
    }
  }

  @media (min-width: 600px){
    flex-direction: row;
    padding: 16px 64px;

    .itemContainer{
      margin-top: 0px;
    }
  }


  strong{
    font-size: 10px;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 4px;
  width: 100%;
  height: 100%;

  .paymentItem{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 8px;
    border: 1px solid #fff3;
    padding: 4px 8px;
    border-radius: 4px;
    cursor: default;

    .paymentIcon{
      margin-right: 8px;
    }

    .paymentDescription{
      font-size: 10px;
    }
  }

  @media (min-width: 600px){
    margin-top: 16px;

    .paymentItem{
      margin: 0px 8px;
    }

    .paymentDescription{
      font-size: 12px;
    }
  }
`;