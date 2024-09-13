package com.bhh.backend.service;

import com.bhh.backend.dto.PessoaDisplayDTO;
import com.bhh.backend.entity.Pessoa;
import com.bhh.backend.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository pessoaRepository;

    public List<PessoaDisplayDTO> listarPessoas() {
        List<Pessoa> pessoas = pessoaRepository.findAll();

        return pessoas.stream()
                .map(pessoa -> new PessoaDisplayDTO(
                        pessoa.getId(),
                        pessoa.getNome(),
                        pessoa.getSobrenome(),
                        pessoa.getEmail(),
                        pessoa.getFone(),
                        pessoa.getIsActive()
                )).toList();
    }
}
