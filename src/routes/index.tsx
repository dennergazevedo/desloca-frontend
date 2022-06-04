import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyles from '../styles/global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from '../pages/Register';
import Contato from "../pages/Contato";
import ClientRent from '../pages/ClientRent';
import NotFound from "../pages/NotFound";

const App = () => {
   return(
    <BrowserRouter>
        <ToastContainer />
        <GlobalStyles />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/cadastro" element={<Register/>} />
            <Route path="/contato" element={<Contato/>} />
            <Route path="/alugar" element={<ClientRent/>} />
            <Route path="*" element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
   )
}

export default App;