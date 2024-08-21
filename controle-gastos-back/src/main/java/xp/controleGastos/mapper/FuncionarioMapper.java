package xp.controleGastos.mapper;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import xp.controleGastos.dto.request.CadastrarFuncionarioDto;
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
}
