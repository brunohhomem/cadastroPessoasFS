package com.bhh.backend.dto;

public record PessoaUpdateDTO(String nome,
                              String sobrenome,
                              String email,
                              String fone,
                              Boolean isActive) {
}


