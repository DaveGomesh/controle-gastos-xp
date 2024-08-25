import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { FormDespesaPage } from './pages/FormDespesaPage';
import { HistoricoPage } from './pages/HistoricoPage';
import { PaginaPrincipal } from './pages/PaginaPrincipal';



function App() {
 
  return (
  <BrowserRouter>
          <Routes>
            <Route path="/" element={<PaginaPrincipal/>} />
            <Route path="/form-despesa" element={<FormDespesaPage/>} />
            <Route path="/historico" element={<HistoricoPage/>} />
          </Routes>
  </BrowserRouter>
  );
}
export default App



 {/* <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
      /> */}