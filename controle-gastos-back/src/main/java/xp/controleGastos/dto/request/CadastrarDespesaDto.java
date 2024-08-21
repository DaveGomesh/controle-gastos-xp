package xp.controleGastos.dto.request;

import java.time.LocalDate;
import java.util.UUID;

import xp.controleGastos.model.TipoDespesa;

public record CadastrarDespesaDto(
    String descricao,
    TipoDespesa tipoDespesa,
    Double valor,
    LocalDate data,
    UUID idFuncionario
) {}
