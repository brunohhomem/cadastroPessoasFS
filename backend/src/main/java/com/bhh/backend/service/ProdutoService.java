package com.bhh.backend.service;

import com.bhh.backend.dto.ProdutoDisplayDTO;
import com.bhh.backend.entity.Produto;
import com.bhh.backend.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public List<ProdutoDisplayDTO> listarProdutos(){
        List<Produto> produtos =  produtoRepository.findAll();

        return produtos.stream()
                .map(produto -> new ProdutoDisplayDTO(produto.getId(),
                                                produto.getDescricao(),
                                                produto.getCreatedAt()))
                .collect(Collectors.toList()); // Coleta o Stream em uma Lista
    }
}
