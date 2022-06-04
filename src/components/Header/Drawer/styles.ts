import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  background-color: transparent;
  color: #fff;
  border: none;
  outline: 0;
`

export const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 16px 32px;
  border-bottom: 1px solid #3331;
  width: 250px;

  .drawerIcon{
    margin-right: 8px;
  }

  .drawerLabel{
    font-size: 14px;
    text-decoration: none;
    color: #333;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  margin-bottom: 8px;

  .title{
    text-transform: lowercase;
    font-variant: small-caps;
    font-weight: bold;
    font-size: 20px;
  }

  .closeButton{
    background: transparent;
    cursor: pointer;
  }
`;