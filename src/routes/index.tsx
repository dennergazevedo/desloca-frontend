import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyles from '../styles/global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import { ContextProvider } from '../context';

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from '../pages/Register';
import Contato from "../pages/Contato";
import ClientRent from '../pages/ClientRent';
import AdminRent from '../pages/AdminRent';
import ManageRent from '../pages/ManageRent';
import ClientHistory from '../pages/ClientHistory';
import RegisterCar from '../pages/RegisterCar';
import NotFound from "../pages/NotFound";

const App = () => {
   return(
    <BrowserRouter>
        <ToastContainer />
        <GlobalStyles />
        <ContextProvider>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/cadastro" element={<Register/>} />
                <Route path="/contato" element={<Contato/>} />
                <Route path="/alugar" element={<ClientRent/>} />
                <Route path="/admin-aluguel" element={<AdminRent/>} />
                <Route path="/gerenciar-veiculos" element={<ManageRent/>} />
                <Route path="/meu-historico" element={<ClientHistory />} />
                <Route path="/cadastrar-veiculos" element={<RegisterCar />} />
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </ContextProvider>
    </BrowserRouter>
   )
}

export default App;