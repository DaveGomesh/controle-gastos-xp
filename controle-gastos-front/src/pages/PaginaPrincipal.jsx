import React from 'react'
import { Link } from 'react-router-dom'

export const PaginaPrincipal = () => {
  return (
   
    <div className='App'>
    <h1>Controle de Gastos</h1>
    <div>
    <Link to="/form-despesa">Go to Form Despesa</Link>
    <Link to="/historico">Go to Historico</Link>
    </div>
    </div>
  )
}


