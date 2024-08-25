import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Historico() {

    const [dados, setDados] = useState()

    useEffect(() => {
        fetch("http://localhost:8080/api/funcionarios/0fc0366c-a490-44b0-8854-1390c235d8da/historico")
            .then(response => response.json())
            .then(historico => {
                setDados(<>
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
                        </div>)}</div>
                </>)
            })
    }, [])

    return (
        <div>
            <h1>Histórico de despesas</h1>
            {dados}
            <Link to={"/"}><button className='btn btn-secondary'>Voltar</button></Link>
        </div>
    )
}