import styled from 'styled-components';
import background from '../../assets/login-background.jpg';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
`;

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 250px;
  height: calc(100vh - 225px);
  background-color: #045007;
  
  &::before{
    content: '';
    display: block;
    position: absolute;
    left: 0%;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
  }

  img{
    opacity: 0.5;
  }

  @media (min-width:600px){
    height: calc(100vh - 170px);
  }
`;

export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  z-index: 1;
  border-radius: 0px 8px 0px 8px;
  box-shadow: 1px 1px 10px 1px #3335;
  padding: 32px;
  min-width: 300px;
  height: auto;

  .title{
    font-size: 20px;
    color: #333;
    margin-bottom: 16px;
  }

  .divider{
    display: flex;
    width: 100%;
    border-bottom: 1px solid #3335;
    margin-bottom: 32px;
  }

  .input{
    border-bottom: 1px solid #3333;
    border-left: 1px solid #3333;
    border-radius: 4px;
    width: 100%;
    padding: 8px 16px;
    margin-bottom: 16px;
    font-size: 14px;
    color: #333;
  }

  .link{
    color: #3339;
    font-size: 14px;
    font-weight: bold;
    transition: 0.2s all;
    margin-top: 16px;

    &:hover{
      transition: 0.5s all;
      color: #333;
    }
  }

  .loginButton{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    width: 100%;
    height: 40px;
    background-color: #00aa2b;
    transition: 0.2s all;
    color: #FFF;

    &:hover{
      transition: 0.5s all;
      background-color: #045007;
    }
  }

  @media (min-width:600px){
    min-width: 450px;
  }
`;