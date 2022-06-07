import React, { useState, useContext } from 'react';
import { toast as alert } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import { GrFormClose } from 'react-icons/gr';
import { FaCar } from 'react-icons/fa';
import { MdExitToApp } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlinePlusCircle } from 'react-icons/ai';
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
import { Context } from '../../../context';

const MenuDrawer: React.FC = () => {
  const navigate = useNavigate ();
  const { user, setUser } = useContext(Context);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  function handleLogout(){
    localStorage.removeItem('user');
    alert.success('Deslogando...');
    setUser({} as IUser);
    setTimeout(function(){
      navigate('/login')
    }, 5000)
  }

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

            <Link to="/alugar">
              <MenuItem>
                <FaCar className="drawerIcon" size={20} color={"#333"} />
                <p className="drawerLabel">Alugar</p>
              </MenuItem>
            </Link>

            {
              user.isAdmin &&
              <Link to="/gerenciar-veiculos">
                <MenuItem>
                  <IoSettingsOutline className="drawerIcon" size={20} color={"#333"} />
                  <p className="drawerLabel">Gerenciar Carros</p>
                </MenuItem>
              </Link>
            }

            {
              user.isAdmin &&
              <Link to="/cadastrar-veiculos">
                <MenuItem bottom={true}>
                  <AiOutlinePlusCircle className="drawerIcon" size={20} color={"#333"} />
                  <p className="drawerLabel">Cadastrar Carro</p>
                </MenuItem>
              </Link>
            }
          </div>
          
          <div className="itemContainer">
            <Link to={user.email? '/meu-historico' : '/login'}>
              <MenuItem>
                <BiLockOpenAlt className="drawerIcon" size={20} color={"#333"} />
                <p className="drawerLabel">{user.email? 'Meu Histórico' : 'Entrar'}</p>
              </MenuItem>
            </Link>

            <Link to="/contato">
              <MenuItem bottom={!user.email}>
                <BiPhone className="drawerIcon" size={20} color={"#333"} />
                <p className="drawerLabel">Contato</p>
              </MenuItem>
            </Link>

            {
              user.email &&
              <MenuItem bottom={true} onClick={handleLogout}>
                <MdExitToApp className="drawerIcon" size={20} color={"#333"} />
                <p className="drawerLabel">Sair</p>
              </MenuItem>
            }
          </div>
        </DrawerContainer>
      </Drawer>
    </Container>
  );
}

export default MenuDrawer;