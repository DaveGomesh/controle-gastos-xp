import Swal from 'sweetalert2'
import { React, useState } from 'react'
import FormDespesa from '../components/FormDespesa';
import Despesa from '../components/Despesa';

export const FormDespesaPage = () => {
    console.log("FormDespesaPage")
    const [despesas, setDespesas] = useState([])

    const addDespesas = (descricao, categoria, valor, data) => {
      const novaDespesa = {
        descricao,
        categoria,
        valor,
        data
      }
     
      setDespesas((prevDespesas) => [...prevDespesas, novaDespesa])
  
      fetch('http://localhost:8080/api/despesas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          idFuncionario:"0fc0366c-a490-44b0-8854-1390c235d8da",
          descricao: descricao,
          tipoDespesa: categoria,
          valor: valor,
          data: data
        })
      })
      .then(response => {
        if (response.ok) {
          Swal.fire({
            title: 'Sucesso!',
            text: 'Despesa adicionada com sucesso!',
            icon: 'success',
          })
        } else {
          Swal.fire({
            title: 'Falha!',
            text: 'Algo de errado não deu certo, tente novamente',
            icon: 'error',
          })
        }
      })
  return (
    <div className='App'>
    <h1>Controle de Gastos</h1>
        <div>
          <FormDespesa addDespesa={addDespesas}/>
        </div>
    <div className='lista-despesas'>
        {despesas.map((despesa) => (
          <Despesa key={despesa.id} despesa={despesa} />
        ))}
    </div>
  </div>
  )
}
}
