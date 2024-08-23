import { useState } from 'react'
import PropTypes from 'prop-types'

const FormDespesa = ({addDespesa}) => {
    const [descricao, setDescricao] = useState('')
    const [tipodespesa, setTipodespesa] = useState('')
    const [valor, setValor] = useState('')
    const [data, setData] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!descricao || !tipodespesa || !valor || !data) return

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
            <ul>
                <li>
                    <label htmlFor='descricao'>Descrição da despesa:</label>
                    <input 
                    id='descricao' 
                    type="text"
                    placeholder='digite uma breve descrição da despesa' 
                    onChange={(e) => setDescricao(e.target.value)}
                    value={descricao}
                    ></input>
                </li>
                <li >
                    <label htmlFor='tipodespesa'>Tipo de despesa:</label>
                    <input id='tipodespesa'
                     type="text" 
                     placeholder='digite o tipo de despesa' 
                     onChange={(e) => setTipodespesa(e.target.value)}
                     value={tipodespesa}
                     ></input>
                </li>
                <li>
                    <label htmlFor='valor'>Valor da despesa:</label>
                    <input id='valor' 
                    type="text" 
                    placeholder='digite o valor da despesa' 
                    onChange={(e) => setValor(e.target.value)}
                    value={valor}    
                    ></input>
                </li>
                <li>
                    <label htmlFor='data'>Data da despesa:</label>
                    <input id='data' 
                    type="text" 
                    placeholder='digite a data no formato dia/mes/ano' 
                    onChange={(e) => setData(e.target.value)}
                    value={data}
                    ></input>
                </li>
            </ul>
            <button>Adicionar despesa</button>
        </form>
    </div>
  )
}

export default FormDespesa