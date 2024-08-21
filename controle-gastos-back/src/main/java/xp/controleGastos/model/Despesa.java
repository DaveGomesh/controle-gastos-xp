package xp.controleGastos.model;

import static xp.controleGastos.model.StatusDespesa.APROVADA;
import static xp.controleGastos.model.StatusDespesa.PENDENTE;
import static xp.controleGastos.model.StatusDespesa.REPROVADA;

import java.time.LocalDate;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Builder
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
public class Despesa {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID idDespesa;

    @NotBlank
    private String descricao;

    @NotNull
    @Enumerated(EnumType.STRING)
    private TipoDespesa tipoDespesa;

    @NotNull
    private Double valor;

    @Past
    private LocalDate data;

    @NotNull
    @Builder.Default
    @Enumerated(EnumType.STRING)
    private StatusDespesa statusDespesa = PENDENTE;

    @ManyToOne
    @JoinColumn(name = "fk_funcionario")
    private Funcionario funcionario;

    public Despesa aprovar() {
        statusDespesa = APROVADA;
        return this;
    }

    public Despesa reprovar() {
        statusDespesa = REPROVADA;
        return this;
    }
}

