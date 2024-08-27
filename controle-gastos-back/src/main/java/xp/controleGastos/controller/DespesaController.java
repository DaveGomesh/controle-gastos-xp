package xp.controleGastos.controller;

import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import xp.controleGastos.dto.request.CadastrarDespesaDto;
import xp.controleGastos.service.DespesaService;

@RestController
@AllArgsConstructor
@RequestMapping("api/despesas")
public class DespesaController {

    private final DespesaService despesaService;
    
    @PostMapping
    public ResponseEntity<UUID> cadastrar(@Valid @RequestBody CadastrarDespesaDto dto){
        var despesa = despesaService.cadastrar(dto);
        return (ResponseEntity
            .status(HttpStatus.CREATED)
            .body(despesa.getIdDespesa())
        );
    }

    @PatchMapping("{idDespesa}/aprovar")
    public ResponseEntity<Void> aprovar(@PathVariable UUID idDespesa) {
        despesaService.aprovar(idDespesa);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("{idDespesa}/reprovar")
    public ResponseEntity<Void> reprovar(@PathVariable UUID idDespesa) {
        despesaService.reprovar(idDespesa);
        return ResponseEntity.ok().build();
    }
}