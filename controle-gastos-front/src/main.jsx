import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormDespesaPage from './pages/FormDespesaPage';
import HistoricoPage from './pages/HistoricoPage';
import PaginaPrincipal from './pages/PrincipalPage';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AprovarDespesaPage from './pages/AprovarDespesaPage';


const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PaginaPrincipal />} />
            <Route path="/form-despesa" element={<FormDespesaPage />} />
            <Route path="/historico" element={<HistoricoPage />} />
            <Route path="/aprovar-despesa" element={<AprovarDespesaPage />}></Route>
        </Routes>
    </BrowserRouter>
)