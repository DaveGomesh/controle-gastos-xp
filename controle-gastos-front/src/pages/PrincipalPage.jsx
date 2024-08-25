import { Link } from 'react-router-dom'

export default function PaginaPrincipal() {
    return (
        <div className='App'>
            <h1>Controle de Gastos</h1>
            <div className='text-center p-3'>
                <Link to="/form-despesa"><button className='btn btn-primary me-2'>Cadastrar Despesa</button></Link>
                <Link to="/historico"><button className='btn btn-primary'>Visualizar Histórico</button></Link>
            </div>
        </div>
    )
}