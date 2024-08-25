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
    //   return <form>
    //     <div className='row'>
    //         <div className='col-6'>
    //             <div className="mb-3">
    //                 <label className="form-label" htmlFor='exampleFormControlTextarea1'>Descrição da despesa:</label>
    //                 <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    //                 <div id="emailHelp" className="form-text">Descreva o seu gasto</div>
    //             </div>
    //         </div>
    //         <div className='col-3'>
    //             <div className="mb-3">
    //                 <label className="form-label" htmlFor='exampleInputEmail1'>Tipo de despesa:</label>
    //                 <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    //                 <div id="emailHelp" className="form-text">Descreva o seu gasto</div>
    //             </div>
    //         </div>
    //         <div className='col-3'>
    //             <div className="mb-3">
    //                 <label className="form-label" htmlFor='exampleInputEmail1'>Tipo de despesa:</label>
    //                 <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    //                 <div id="emailHelp" className="form-text">Descreva o seu gasto</div>
    //             </div>
    //         </div>
    //     </div>
    
    //   <button type="submit" className="btn btn-primary">Submit</button>
    // </form>
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
                    placeholder='digite a data no formato ano-mes-dia' 
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