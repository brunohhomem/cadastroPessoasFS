package com.bhh.backend.dto;

import java.time.LocalDateTime;

public record ProdutoDisplayDTO(Long id, String descricao, LocalDateTime createdAt) {
}
