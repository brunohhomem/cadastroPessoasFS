package com.bhh.backend.service;

import com.bhh.backend.dto.ProdutoDisplayDTO;
import com.bhh.backend.dto.ProdutoInsertDTO;
import com.bhh.backend.dto.ProdutoUpdateDTO;
import com.bhh.backend.entity.Produto;
import com.bhh.backend.exceptions.ProdutoException;
import com.bhh.backend.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public List<ProdutoDisplayDTO> listarProdutos() {
        List<Produto> produtos = produtoRepository.findAll();

        return produtos.stream()
                .map(produto -> new ProdutoDisplayDTO(produto.getId(),
                        produto.getDescricao(),
                        produto.getCreatedAt()))
                .collect(Collectors.toList()); // Coleta o Stream em uma Lista
    }

    public ProdutoDisplayDTO buscarProduto(Long id) {
        Produto produto = produtoRepository.findById(id)
                .orElseThrow(() -> new ProdutoException("Produto não encontrado"));

        return new ProdutoDisplayDTO(produto.getId(), produto.getDescricao(), produto.getCreatedAt());
    }

    public ProdutoDisplayDTO inserirProduto(ProdutoInsertDTO produtoInsertDTO) {
        Produto novoProduto = new Produto(produtoInsertDTO);

        novoProduto = produtoRepository.save(novoProduto);

        return new ProdutoDisplayDTO(novoProduto.getId(), novoProduto.getDescricao(), novoProduto.getCreatedAt());
    }

    public ProdutoDisplayDTO atualizarProduto(Long produtoId, ProdutoUpdateDTO produtoUpdateDTO) {
        Produto produto = produtoRepository.findById(produtoId)
                .orElseThrow(() -> new ProdutoException("Produto não encontrado"));

        if (produtoUpdateDTO.descricao() != null && !produtoUpdateDTO.descricao().isEmpty()
                && !Objects.equals(produtoUpdateDTO.descricao(), produto.getDescricao())) {
            produto.setDescricao(produtoUpdateDTO.descricao());
        }

        produto = produtoRepository.save(produto);

        return new ProdutoDisplayDTO(produto.getId(), produto.getDescricao(), produto.getCreatedAt());
    }
}
