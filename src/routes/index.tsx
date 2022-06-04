import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyles from '../styles/global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

import Home from "../pages/Home";
import Contato from "../pages/Contato";
import NotFound from "../pages/NotFound";

const App = () => {
   return(
    <BrowserRouter>
        <ToastContainer />
        <GlobalStyles />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contato" element={<Contato/>} />
            <Route path="*" element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
   )
}

export default App;