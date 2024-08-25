import { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function FormDespesa({ addDespesa }) {
    const [descricao, setDescricao] = useState('')
    const [tipodespesa, setTipodespesa] = useState('')
    const [valor, setValor] = useState('')
    const [data, setData] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!descricao || !tipodespesa || !valor || !data) return

        addDespesa(descricao, tipodespesa, valor, data)
        setDescricao('')
        setTipodespesa('')
        setValor('')
        setData('')
    }

    FormDespesa.propTypes = {
        addDespesa: PropTypes.func.isRequired,
    };
    
    return (
        <div className='FormularioDespesa'>
            <h2>Adicionar Despesa</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='descricao'>Descrição da despesa:</label>
                    <textarea
                        id="descricao"
                        className="form-control"
                        onChange={(e) => setDescricao(e.target.value)}
                        value={descricao}
                        rows="3"
                    ></textarea>
                </div>

                <div className='mb-3'>
                    <label className='form-label' htmlFor='tipodespesa'>Tipo de despesa:</label>
                    <select
                        id='tipodespesa'
                        className='form-select'
                        onChange={(e) => setTipodespesa(e.target.value)}
                        value={tipodespesa}
                    >
                        <option value='ALIMENTACAO'>Alimentação</option>
                        <option value='TRANSPORTE'>Transporte</option>
                        <option value='HOSPEDAGEM'>Hospedagem</option>
                    </select>
                </div>

                <div className='mb-3'>
                    <label className='form-label' htmlFor='valor'>Valor da despesa:</label>
                    <input id='valor'
                        className='form-control'
                        type="text"
                        placeholder='digite o valor da despesa'
                        onChange={(e) => setValor(e.target.value)}
                        value={valor}
                    ></input>
                </div>

                <div className='mb-4'>
                    <label className='form-label' htmlFor='data'>Data da despesa:</label>
                    <input id='data'
                        className='form-control'
                        type="text"
                        placeholder='digite a data no formato ano-mes-dia'
                        onChange={(e) => setData(e.target.value)}
                        value={data}
                    ></input>
                </div>

                <button className='btn btn-primary me-2'>Adicionar despesa</button>
                <Link to={"/"}><button className='btn btn-secondary'>Voltar</button></Link>
            </form>
        </div>
    )
}