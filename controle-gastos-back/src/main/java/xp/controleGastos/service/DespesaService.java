package xp.controleGastos.service;

import java.util.UUID;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import xp.controleGastos.dto.request.CadastrarDespesaDto;
import xp.controleGastos.mapper.DespesaMapper;
import xp.controleGastos.model.Despesa;
import xp.controleGastos.repository.DespesaRepository;

@Service
@AllArgsConstructor
public class DespesaService {

    private final DespesaRepository despesaRepository;
    private final DespesaMapper despesaMapper;
    
    public Despesa cadastrar(CadastrarDespesaDto dto) {
        var despesa = despesaMapper.toModel(dto);
        return despesaRepository.save(despesa);
    }

    public void aprovar(UUID idDespesa) {
        despesaRepository.save(despesaRepository
            .findById(idDespesa)
            .orElseThrow()
            .aprovar()
        );
    }

    public void reprovar(UUID idDespesa) {
        despesaRepository.save(despesaRepository
            .findById(idDespesa)
            .orElseThrow()
            .reprovar()
        );
    }
}
