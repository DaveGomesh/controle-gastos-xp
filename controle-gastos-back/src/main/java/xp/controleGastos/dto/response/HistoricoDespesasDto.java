package xp.controleGastos.dto.response;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

import xp.controleGastos.model.StatusDespesa;
import xp.controleGastos.model.TipoDespesa;

public record HistoricoDespesasDto(
    UUID idFuncionario,
    String nome,
    Double total,
    List<DespesaDto> despesas
) {
    public record DespesaDto(
        UUID idDespesa,
        String descricao,
        TipoDespesa tipo,
        Double valor,
        LocalDate data,
        StatusDespesa status
    ) {}
}
