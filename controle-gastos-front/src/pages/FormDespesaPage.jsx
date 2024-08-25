import Swal from 'sweetalert2';
import FormDespesa from '../components/FormDespesa';

export default function FormDespesaPage() {
    const addDespesas = (descricao, categoria, valor, data) => {
        fetch('http://localhost:8080/api/despesas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idFuncionario: "0fc0366c-a490-44b0-8854-1390c235d8da",
                descricao: descricao,
                tipoDespesa: categoria,
                valor: valor,
                data: data
            })
        }).then(response => {
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
    }

    return (
        <div className='App'>
            <h1>Controle de Gastos</h1>
            <FormDespesa addDespesa={addDespesas} />
        </div>
    )
}
