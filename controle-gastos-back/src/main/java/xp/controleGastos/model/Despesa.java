package xp.controleGastos.model;

import java.time.LocalDate;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Despesa {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID idDespesa;

    @NotBlank
    private String descricao;

    @NotNull
    private Double valor;

    @Past
    private LocalDate data;

    @ManyToOne
    @JoinColumn(name = "fk_funcionario")
    private Funcionario funcionario;

}

