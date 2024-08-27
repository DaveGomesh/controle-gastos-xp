package xp.controleGastos.dto.request;

import java.time.LocalDate;
import java.util.UUID;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import xp.controleGastos.model.TipoDespesa;

public record CadastrarDespesaDto(
    
    @NotBlank
    String descricao,

    @NotNull
    TipoDespesa tipoDespesa,

    @Min(1)
    @NotNull
    Double valor,

    @Past
    @NotNull
    LocalDate data,

    @NotNull
    UUID idFuncionario
) {}
