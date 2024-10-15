package com.bhh.backend.entity;

import com.bhh.backend.dto.ProdutoInsertDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "produtos")
@AllArgsConstructor
@NoArgsConstructor
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String descricao;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now(); //Já deixando a data ser iniciada na criação da entidade;

    public Produto(ProdutoInsertDTO produtoInsertDTO) {
        this.descricao = produtoInsertDTO.descricao();
    }
}
