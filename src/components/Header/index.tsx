import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/header-logo.png';

import MenuDrawer from './Drawer';
import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container> 
        <Link to="/" className="headerLinkLogo"> 
          <img className="headerLogoImage" alt="LogoImage" src={logo}/>
        </Link>
        <MenuDrawer />
    </Container>
  );
}

export default Header;