package com.bhh.backend.dto;

import java.time.LocalDateTime;

public record PessoaDisplayDTO(Long id,
                               String nome,
                               String sobrenome,
                               String email,
                               String fone,
                               Boolean isActive,
                               LocalDateTime createdAt) {
}


