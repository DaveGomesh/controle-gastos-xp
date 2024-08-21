package xp.controleGastos.mapper;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import xp.controleGastos.dto.request.CadastrarDespesaDto;
import xp.controleGastos.model.Despesa;
import xp.controleGastos.repository.FuncionarioRepository;

@Component
@AllArgsConstructor
public class DespesaMapper {

    private final FuncionarioRepository funcionarioRepository;
    
    public Despesa toModel(CadastrarDespesaDto dto) {
        var usuario = funcionarioRepository.findById(dto.idFuncionario()).orElseThrow();
        return (Despesa.builder()
            .descricao(dto.descricao())
            .tipoDespesa(dto.tipoDespesa())
            .valor(dto.valor())
            .data(dto.data())
            .funcionario(usuario)
            .build()
        );
    }
}
