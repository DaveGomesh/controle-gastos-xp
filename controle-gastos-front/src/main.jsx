import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormDespesaPage from './pages/FormDespesaPage';
import HistoricoPage from './pages/HistoricoPage';
import PaginaPrincipal from './pages/PaginaPrincipal';

import './App.css';


const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PaginaPrincipal />} />
            <Route path="/form-despesa" element={<FormDespesaPage />} />
            <Route path="/historico" element={<HistoricoPage />} />
        </Routes>
    </BrowserRouter>
)