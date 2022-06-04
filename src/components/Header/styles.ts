import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: auto;
  color: #fff;
  font-size: 12px;
  padding: 8px 32px;
  text-transform: uppercase;
  font-variant: small-caps;
  background-image: linear-gradient(#045007,#00aa2b);
  z-index: 1;

  .headerLinkLogo{
    display: flex;
    justify-content: center;
    align-items: center;

    .headerLogoImage{
      height: 60px;
      width: 100%;
    }
  }
`