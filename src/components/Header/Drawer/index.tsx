import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BiMenu, 
  BiHomeAlt, 
  BiUser, 
  BiPhone,
  BiLockOpenAlt
} from 'react-icons/bi';

import Drawer from '@mui/material/Drawer';
import { Container, Button, MenuItem } from './styles';

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
        <Link to="/">
          <MenuItem>
            <BiHomeAlt className="drawerIcon" size={20} color={"#333"} />
            <p className="drawerLabel">Início</p>
          </MenuItem>
        </Link>

        <Link to="/area-cliente">
          <MenuItem>
            <BiUser className="drawerIcon" size={20} color={"#333"} />
            <p className="drawerLabel">Área do Cliente</p>
          </MenuItem>
        </Link>

        <Link to="/contato">
          <MenuItem>
            <BiPhone className="drawerIcon" size={20} color={"#333"} />
            <p className="drawerLabel">Contato</p>
          </MenuItem>
        </Link>

        <Link to="/admin">
          <MenuItem>
            <BiLockOpenAlt className="drawerIcon" size={20} color={"#333"} />
            <p className="drawerLabel">Administração</p>
          </MenuItem>
        </Link>
      </Drawer>
    </Container>
  );
}

export default MenuDrawer;