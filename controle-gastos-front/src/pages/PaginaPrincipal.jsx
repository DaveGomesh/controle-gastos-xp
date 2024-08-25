import { Link } from 'react-router-dom'

export default function PaginaPrincipal() {
    return (
        <div className='App'>
            <h1>Controle de Gastos</h1>
            <div>
                <Link to="/form-despesa"><button>Go to Form Despesa</button></Link>
                <Link to="/historico"><button>Go to Historico</button></Link>
            </div>
        </div>
    )
}