import { useState, useEffect } from 'react'
import Swal from 'sweetalert2';

export default function AprovarDespesa () {
        const [despesa, setDespesa] = useState('')
        
        useEffect(() => {
            fetch("http://localhost:8080/api/funcionarios/0fc0366c-a490-44b0-8854-1390c235d8da/historico")
                .then(response => response.json())
                .then(historico => {
                    setDespesa(<>
                        <div className="border border-dark mb-3 rounded p-3 bg-white">
                            <div><strong>Nome:</strong> {historico.nome}</div>
                            <div><strong>Total:</strong> R${historico.total}</div>
                        </div>
    
                        <div id="rolagem-historico" className="overflow-auto" style={{ maxHeight: "500px" }}>{historico.despesas.map(despesa => <div key={despesa.idDespesa} className="border border-dark mb-3 rounded p-3 bg-white">
                            <div><strong>Descrição:</strong> {despesa.descricao}</div>
                            <div><strong>Tipo:</strong> {despesa.tipo}</div>
                            <div><strong>Valor:</strong> R${despesa.valor}</div>
                            <div><strong>Data:</strong> {despesa.data}</div>
                            <div><strong>Status:</strong> {despesa.status}</div>
                            <div>
                                {
                                    despesa.status === 'PENDENTE' ? <>
                                        <button className='btn btn-success me-2' onClick={() => aprovarDespesa(despesa.idDespesa)}>Aprovar</button>
                                        <button className='btn btn-danger' onClick={() => reprovarDespesa(despesa.idDespesa)}>Reprovar</button>
                                    </> : <></>
                                }
                               
                            </div>
                            
                        </div>)}</div>
                    </>)
                })
        }, [])

        function aprovarDespesa(idDespesa) {
            fetch(`http://localhost:8080/api/despesas/${idDespesa}/aprovar`, {
                method: 'PATCH'
            }).then(response => {
                if (response.ok) {
                    Swal.fire({
                        title: 'Sucesso!',
                        text: 'Despesa aprovada com sucesso!',
                        icon: 'success',
                    }).then(() => window.location.reload())
                } else {
                    Swal.fire({
                        title: 'Falha!',
                        text: 'Algo de errado não deu certo, tente novamente',
                        icon: 'error',
                    })
                }
            })
        }

        function reprovarDespesa(idDespesa) {
            fetch(`http://localhost:8080/api/despesas/${idDespesa}/reprovar`, {
                method: 'PATCH'
            }).then(response => {
                if (response.ok) {
                    Swal.fire({
                        title: 'Sucesso!',
                        text: 'Despesa reprovada com sucesso!',
                        icon: 'success',
                    }).then(() => window.location.reload())
                } else {
                    Swal.fire({
                        title: 'Falha!',
                        text: 'Algo de errado não deu certo, tente novamente',
                        icon: 'error',
                    })
                }
            })
        }
        

  return (
    <div>
    <h1>Aprovar Despesa</h1>
    {despesa}
    </div>
  )
}
