
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Paginas/Home';
import Contatos from './components/Paginas/Contatos';
import Menu from './components/Menu';

function AppRoutes() {
  return (
    <BrowserRouter>

      <Menu />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="*" element={<div> Página não encontrada </div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
