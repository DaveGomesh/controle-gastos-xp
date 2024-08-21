package xp.controleGastos.service;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import xp.controleGastos.dto.request.CadastrarFuncionarioDto;
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
}
