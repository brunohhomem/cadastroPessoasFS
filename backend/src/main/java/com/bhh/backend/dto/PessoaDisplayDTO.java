package com.bhh.backend.dto;

public record PessoaDisplayDTO(Long id,
                               String nome,
                               String sobrenome,
                               String email,
                               String fone,
                               Boolean isActive) {
}


