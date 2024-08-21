package xp.controleGastos.controller;

import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import xp.controleGastos.dto.request.CadastrarDespesaDto;
import xp.controleGastos.service.DespesaService;

@RestController
@AllArgsConstructor
@RequestMapping("api/despesas")
public class DespesaController {

    private final DespesaService despesaService;
    
    @PostMapping
    public ResponseEntity<UUID> cadastrar(@RequestBody CadastrarDespesaDto dto){
        var despesa = despesaService.cadastrar(dto);
        return (ResponseEntity
            .status(HttpStatus.CREATED)
            .body(despesa.getIdDespesa())
        );
    }
}