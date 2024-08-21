package xp.controleGastos.controller;

import java.util.UUID;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import xp.controleGastos.dto.request.CadastrarFuncionarioDto;
import xp.controleGastos.service.FuncionarioService;

@RestController
@AllArgsConstructor
@RequestMapping("api/funcionarios")
public class FuncionarioController {

    private final FuncionarioService funcionarioService;
    
    @PostMapping
    public ResponseEntity<UUID> cadastrar(@RequestBody CadastrarFuncionarioDto dto) {
        return (ResponseEntity
            .status(HttpStatus.CREATED)
            .body(funcionarioService.cadastrar(dto).getIdFuncionario())
        );
    }
}
