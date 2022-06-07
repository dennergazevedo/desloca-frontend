import styled from 'styled-components'

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
  justify-content: flex-start;
  width: 100%;
  min-width: 250px;
  margin: 16px 0px;
  min-height: 65vh;

  @media (min-width: 600px){
    min-height: 70vh;
  }
`;

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  min-width: 80vw;
  background-color: #045007;
  padding: 0px;
  height: 100%;
  margin-top: 0px;
  overflow: hidden;

  .registerCarImageContainer{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    height: 180px;
    width: 50%;
    min-width: 320px;

    .exampleCar{
      object-fit: contain;
      margin-left: -60px;
      height: 300px;
    }

    @media (min-width: 600px){
      .exampleCar{
        margin-left: -200px;
        height: 700px;
      }
    }
  }

  .registerCarForm{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: calc(100% + 100px);
    background-color: #FFF;
    border: 1px solid #3333;
    width: 100%;
    box-shadow: 1px 1px 10px 1px #3333;
    padding: 16px 32px;
    min-width: 320px;
    margin-top: 0px;

    .title{
      font-size: 32px;
      font-variant: small-caps;
      text-transform: lowercase;
      margin-bottom: 20px;
    }

    .input,
    .textarea {
      border-bottom: 1px solid #3333;
      border-left: 1px solid #3333;
      border-radius: 4px;
      width: 100%;
      padding: 8px 16px;
      margin-bottom: 8px;
      font-size: 14px;
      color: #333;
    }

    .textarea{
      height: 120px;
      margin-top: 16px;
    }

    .sendButton{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 40px;
      background-color: #045007;
      color: #fff;
      border-radius: 0px 8px 0px 8px;
      margin-top: 16px;
      transition: 0.2s all;

      &:hover{
        transition: 0.5s all;
        background-color: #00aa2b;
      }
    }

    @media (min-width: 600px){
      margin-top: -50px;
      width: 40%;

      .title{
        font-size: 48px;
      }
    }
  }

  @media (min-width: 600px){
    min-height: 40vh;
    height: 45vh;
    padding: 0px 32px;
    margin-top: 64px;
    overflow: visible;
    
    .registerCarImageContainer{
      height: 100%;
    }

    .contactDescriptionItem{
      margin-top: 0px;
    }

    .contactForm{
      margin-top: -28px;
    }
  }
`;