import { useEffect, useState } from "react"

export default function Historico() {

    const [dados, setDados] = useState()

    useEffect(() => {
        fetch("http://localhost:8080/api/funcionarios/0fc0366c-a490-44b0-8854-1390c235d8da/historico")
            .then(response => response.json())
            .then(historico => {
                setDados(<>
                    <div>{historico.idFuncionario}</div>
                    <div>{historico.nome}</div>
                    <div>{historico.total}</div>
                    <div>{historico.despesas.map(despesa => <>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div>{despesa.descricao}</div>
                        <div>{despesa.tipo}</div>
                        <div>{despesa.valor}</div>
                        <div>{despesa.data}</div>
                        <div>{despesa.status}</div>
                    </>)}</div>
                </>)
            })
    }, [])

    return (
        <div>
            <h1>Historico</h1>
            {dados}
        </div>
    )
}