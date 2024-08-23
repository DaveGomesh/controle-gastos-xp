 import { useState } from 'react'
 import './App.css'
 import Despesa from './components/Despesa';
 import FormDespesa from './components/FormDespesa';




function App() {
  const [despesas, setDespesas] = useState([])

  const addDespesa = (descricao, categoria, valor, data) => {
    const novaDespesa = {
      descricao,
      categoria,
      valor,
      data
    }
   /*   setDespesas((prevDespesas) => [...prevDespesas, novaDespesa])

    fetch('https://example.com/api/endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        key: 'value',
        anotherKey: 'anotherValue'
      })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
      */
 }
  return <div className='App'>
    <h1>Controle de Gastos</h1>
        <div>
          <FormDespesa addDespesa={addDespesa}/>
        </div>
    <div className='lista-despesas'>
        {despesas.map((despesa) => (
          <Despesa key={despesa.id} despesa={despesa} />
        ))}
    </div>
  </div>;
}

//* 

export default App
