package com.bhh.backend.controller;

import com.bhh.backend.dto.ProdutoDisplayDTO;
import com.bhh.backend.dto.ProdutoInsertDTO;
import com.bhh.backend.dto.ProdutoUpdateDTO;
import com.bhh.backend.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/produtos")
@CrossOrigin(origins = "http://localhost:3000")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @GetMapping("/listarProdutos")
    public ResponseEntity<List<ProdutoDisplayDTO>> listarProdutos() {
        List<ProdutoDisplayDTO> produtos = produtoService.listarProdutos();

        return new ResponseEntity<>(produtos, HttpStatus.OK);
    }

    @GetMapping("/buscarProduto/{produtoId}")
    public ResponseEntity<ProdutoDisplayDTO> buscarProduto(@PathVariable Long produtoId) {
        try {
            ProdutoDisplayDTO produto = produtoService.buscarProduto(produtoId);
            return ResponseEntity.ok(produto);
        } catch (RuntimeException e) {
            return ResponseEntity.noContent().build();
        }
    }

    @PostMapping("/inserirProduto")
    public ResponseEntity<ProdutoDisplayDTO> inserirPessoa(@RequestBody ProdutoInsertDTO produtoInsertDTO) {
        ProdutoDisplayDTO produtoDisplayDTO = produtoService.inserirProduto(produtoInsertDTO);

        return ResponseEntity.status(HttpStatus.CREATED).body(produtoDisplayDTO);
    }

    @PutMapping("/atualizarProduto/{produtoId}")
    public ResponseEntity<ProdutoDisplayDTO> atualizarProduto(@PathVariable Long produtoId, @RequestBody ProdutoUpdateDTO produtoUpdateDTO) {
        try {
            ProdutoDisplayDTO produto = produtoService.atualizarProduto(produtoId, produtoUpdateDTO);
            return ResponseEntity.ok(produto);
        } catch (RuntimeException e) {
            return ResponseEntity.noContent().build();
        }
    }

    @DeleteMapping("/detelarProduto/{produtoId}")
    public ResponseEntity<Void> deletarPessoa(@PathVariable Long produtoId) {
        produtoService.deletarProduto(produtoId);
        return ResponseEntity.noContent().build();
    }
}
