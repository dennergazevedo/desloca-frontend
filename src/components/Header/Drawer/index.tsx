import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import { GrFormClose } from 'react-icons/gr';
import { FaCar } from 'react-icons/fa';
import { 
  BiMenu, 
  BiHomeAlt, 
  BiPhone,
  BiLockOpenAlt
} from 'react-icons/bi';

import { 
  Container, 
  Button, 
  MenuItem,
  DrawerContainer,
  Title
} from './styles';

const MenuDrawer: React.FC = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Button onClick={toggle}>
        <BiMenu size={32} color={"#FFF"}/>
      </Button>
      <Drawer
        anchor={'right'}
        open={isOpen}
        onClose={toggle}
      >
        <DrawerContainer>
          <div className="itemContainer">
            <Title>
              <p className="title">Menu</p>
              <button 
                className="closeButton"
                onClick={toggle}
              >
                <GrFormClose size={24} color={"#333"} />
              </button>
            </Title>
            <Link to="/">
              <MenuItem>
                <BiHomeAlt className="drawerIcon" size={20} color={"#333"} />
                <p className="drawerLabel">Início</p>
              </MenuItem>
            </Link>

            <Link to="/">
              <MenuItem bottom={true}>
                <FaCar className="drawerIcon" size={20} color={"#333"} />
                <p className="drawerLabel">Alugar</p>
              </MenuItem>
            </Link>
          </div>
          
          <div className="itemContainer">
            <Link to="/login">
              <MenuItem>
                <BiLockOpenAlt className="drawerIcon" size={20} color={"#333"} />
                <p className="drawerLabel">Entrar</p>
              </MenuItem>
            </Link>

            <Link to="/contato">
              <MenuItem bottom={true}>
                <BiPhone className="drawerIcon" size={20} color={"#333"} />
                <p className="drawerLabel">Contato</p>
              </MenuItem>
            </Link>
          </div>
        </DrawerContainer>
      </Drawer>
    </Container>
  );
}

export default MenuDrawer;