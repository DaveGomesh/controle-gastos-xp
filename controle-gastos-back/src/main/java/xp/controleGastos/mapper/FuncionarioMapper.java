package xp.controleGastos.mapper;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import xp.controleGastos.dto.request.CadastrarFuncionarioDto;
import xp.controleGastos.dto.response.HistoricoDespesasDto;
import xp.controleGastos.model.Despesa;
import xp.controleGastos.model.Funcionario;

@Component
@AllArgsConstructor
public class FuncionarioMapper {
    
    public Funcionario toModel(CadastrarFuncionarioDto dto) {
        return (Funcionario.builder()
            .nome(dto.nome())
            .build()
        );
    }

    public HistoricoDespesasDto toHistoricoDespesasDto(Funcionario funcionario) {
        return new HistoricoDespesasDto(
            funcionario.getIdFuncionario(),
            funcionario.getNome(),
            funcionario.getDespesas().stream().mapToDouble(Despesa::getValor).sum(),
            funcionario.getDespesas().stream().map(despesa -> new HistoricoDespesasDto.DespesaDto(
                despesa.getIdDespesa(),
                despesa.getDescricao(),
                despesa.getTipoDespesa(),
                despesa.getValor(),
                despesa.getData(),
                despesa.getStatusDespesa()
            )).toList()
        );
    }
}
