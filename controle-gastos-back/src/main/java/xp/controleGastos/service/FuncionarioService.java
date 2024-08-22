package xp.controleGastos.service;

import java.util.UUID;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import xp.controleGastos.dto.request.CadastrarFuncionarioDto;
import xp.controleGastos.dto.response.HistoricoDespesasDto;
import xp.controleGastos.mapper.FuncionarioMapper;
import xp.controleGastos.model.Funcionario;
import xp.controleGastos.repository.FuncionarioRepository;

@Service
@AllArgsConstructor
public class FuncionarioService {

    private final FuncionarioRepository funcionarioRepository;
    private final FuncionarioMapper funcionarioMapper;

    public Funcionario cadastrar(CadastrarFuncionarioDto dto) {
        return funcionarioRepository.save(funcionarioMapper.toModel(dto));
    }

    public HistoricoDespesasDto historicoDespesas(UUID idFuncionario) {
        var funcionario = funcionarioRepository.findById(idFuncionario).orElseThrow();
        return funcionarioMapper.toHistoricoDespesasDto(funcionario);
    }
}
