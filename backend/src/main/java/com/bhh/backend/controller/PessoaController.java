package com.bhh.backend.controller;

import com.bhh.backend.dto.PessoaDisplayDTO;
import com.bhh.backend.dto.PessoaInsertDTO;
import com.bhh.backend.dto.PessoaUpdateDTO;
import com.bhh.backend.service.PessoaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/pessoas")
public class PessoaController {

    @Autowired
    private PessoaService pessoaService;

    @GetMapping("/listarPessoas")
    public ResponseEntity<List<PessoaDisplayDTO>> listarPessoas() {
        List<PessoaDisplayDTO> pessoas = pessoaService.listarPessoas();

        return new ResponseEntity<>(pessoas, HttpStatus.OK);
    }

    @GetMapping("/buscarPessoa/{pessoaId}")
    public ResponseEntity<PessoaDisplayDTO> buscarPessoa(@PathVariable Long pessoaId) {
        try {
            PessoaDisplayDTO pessoa = pessoaService.buscarPessoaId(pessoaId);
            return ResponseEntity.ok(pessoa);
        } catch (RuntimeException e) {
            return ResponseEntity.noContent().build();
        }
    }

    @PostMapping("/inserirPessoa")
    public ResponseEntity<PessoaDisplayDTO> inserirPessoa(@RequestBody PessoaInsertDTO pessoaInsertDTO) {
        PessoaDisplayDTO pessoaDisplayDTO = pessoaService.inserirPessoa(pessoaInsertDTO);

        return ResponseEntity.status(HttpStatus.CREATED).body(pessoaDisplayDTO);
    }

    @PutMapping("/atualizarPessoa/{pessoaId}")
    public ResponseEntity<PessoaDisplayDTO> atualizarPessoa(@PathVariable Long pessoaId, @RequestBody PessoaUpdateDTO pessoaUpdateDTO) {
        try {
            PessoaDisplayDTO pessoa = pessoaService.atualizarPessoa(pessoaId, pessoaUpdateDTO);
            return ResponseEntity.ok(pessoa);
        } catch (RuntimeException e) {
            return ResponseEntity.noContent().build();
        }
    }

    @DeleteMapping("/detelarPessoa/{pessoaId}")
    public ResponseEntity<Void> deletarPessoa(@PathVariable Long pessoaId) {
        pessoaService.deletarPessoa(pessoaId);
        return ResponseEntity.noContent().build();
    }
}
