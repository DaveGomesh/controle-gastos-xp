package xp.controleGastos.service;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static xp.controleGastos.model.StatusDespesa.APROVADA;
import static xp.controleGastos.model.StatusDespesa.REPROVADA;
import static xp.controleGastos.model.TipoDespesa.ALIMENTACAO;

import java.time.LocalDate;
import java.util.UUID;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import xp.controleGastos.dto.request.CadastrarDespesaDto;
import xp.controleGastos.model.Funcionario;
import xp.controleGastos.repository.DespesaRepository;
import xp.controleGastos.repository.FuncionarioRepository;

@SpringBootTest
public class DespesaServiceTest {

    @Autowired
    private DespesaService despesaService;

    @Autowired
    private FuncionarioRepository funcionarioRepository;
    
    @Autowired
    private DespesaRepository despesaRepository;

    @Test
    void deveCadatrarUmaDespesa() {
        var funcionario = funcionarioRepository.save(
            Funcionario.builder().nome("Paulo").build()
        );

        var dto = new CadastrarDespesaDto(
            "Jantar",
            ALIMENTACAO,
            500.0,
            LocalDate.now().minusDays(2),
            funcionario.getIdFuncionario()
        );

        var despesa = despesaService.cadastrar(dto);

        assertNotNull(despesa.getIdDespesa());
        assertEquals(dto.descricao(), despesa.getDescricao());
        assertEquals(dto.tipoDespesa(), despesa.getTipoDespesa());
        assertEquals(dto.valor(), despesa.getValor());
        assertEquals(dto.data(), despesa.getData());
        assertEquals(dto.idFuncionario(), despesa.getFuncionario().getIdFuncionario());
    }

    @Test
    void naoDeveCadatrarUmaDespesaInvalida() {
        var funcionario = funcionarioRepository.save(
            Funcionario.builder().nome("Paulo").build()
        );

        assertThrows(Exception.class,
            () -> despesaService.cadastrar(new CadastrarDespesaDto(
                null, null, null, null, null
            ))
        );

        assertThrows(Exception.class,
            () -> despesaService.cadastrar(new CadastrarDespesaDto(
                "", null, null, null, null
            ))
        );

        assertThrows(Exception.class,
            () -> despesaService.cadastrar(new CadastrarDespesaDto(
                "Jantar", null, null, null, null
            ))
        );

        assertThrows(Exception.class,
            () -> despesaService.cadastrar(new CadastrarDespesaDto(
                "Jantar",
                ALIMENTACAO, null, null, null
            ))
        );

        assertThrows(Exception.class,
            () -> despesaService.cadastrar(new CadastrarDespesaDto(
                "Jantar",
                ALIMENTACAO,
                0.0, null, null
            ))
        );

        assertThrows(Exception.class,
            () -> despesaService.cadastrar(new CadastrarDespesaDto(
                "Jantar",
                ALIMENTACAO,
                1.0, null, null
            ))
        );

        assertThrows(Exception.class,
            () -> despesaService.cadastrar(new CadastrarDespesaDto(
                "Jantar",
                ALIMENTACAO,
                1.0,
                LocalDate.now(), null
            ))
        );

        assertThrows(Exception.class,
            () -> despesaService.cadastrar(new CadastrarDespesaDto(
                "Jantar",
                ALIMENTACAO,
                1.0,
                LocalDate.now().plusDays(1), null
            ))
        );

        assertThrows(Exception.class,
            () -> despesaService.cadastrar(new CadastrarDespesaDto(
                "Jantar",
                ALIMENTACAO,
                1.0,
                LocalDate.now().minusDays(1), null
            ))
        );

        assertThrows(Exception.class,
            () -> despesaService.cadastrar(new CadastrarDespesaDto(
                "Jantar",
                ALIMENTACAO,
                1.0,
                LocalDate.now().minusDays(1),
                UUID.fromString("0fc0366c-a490-44b0-8854-1390c235d8dg")
            ))
        );

        assertThrows(Exception.class,
            () -> despesaService.cadastrar(new CadastrarDespesaDto(
                "Jantar",
                ALIMENTACAO,
                1.0,
                LocalDate.now().minusDays(1),
                UUID.fromString("0fc0366c-a490-44b0-8854-1390c235d8dc")
            ))
        );

        assertDoesNotThrow(
            () -> despesaService.cadastrar(new CadastrarDespesaDto(
                "Jantar",
                ALIMENTACAO,
                1.0,
                LocalDate.now().minusDays(1),
                funcionario.getIdFuncionario()
            ))
        );
    }

    @Test
    void deveAprovarUmaDespesa() {
        var funcionario = funcionarioRepository.save(
            Funcionario.builder().nome("Paulo").build()
        );

        var despesa = despesaService.cadastrar(new CadastrarDespesaDto(
            "Jantar", ALIMENTACAO, 500.0, LocalDate.now().minusDays(2),
            funcionario.getIdFuncionario()
        ));

        assertDoesNotThrow(
            () -> despesaService.aprovar(despesa.getIdDespesa())
        );

        var despesaAtualizada = despesaRepository.findById(despesa.getIdDespesa()).get();
        assertEquals(APROVADA, despesaAtualizada.getStatusDespesa());
    }

    @Test
    void deveReprovarUmaDespesa() {
        var funcionario = funcionarioRepository.save(
            Funcionario.builder().nome("Paulo").build()
        );

        var despesa = despesaService.cadastrar(new CadastrarDespesaDto(
            "Jantar", ALIMENTACAO, 500.0, LocalDate.now().minusDays(2),
            funcionario.getIdFuncionario()
        ));

        assertDoesNotThrow(
            () -> despesaService.reprovar(despesa.getIdDespesa())
        );

        var despesaAtualizada = despesaRepository.findById(despesa.getIdDespesa()).get();
        assertEquals(REPROVADA, despesaAtualizada.getStatusDespesa());
    }
}
