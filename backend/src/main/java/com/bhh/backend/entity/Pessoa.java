package com.bhh.backend.entity;

import com.bhh.backend.dto.PessoaInsertDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "pessoa")
@NoArgsConstructor
@AllArgsConstructor
public class Pessoa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome;
    private String sobrenome;

    @Column(unique = true)
    private String email;
    private String fone;

    @Column(name = "is_active")
    private Boolean isActive = true;

    @Column(name = "created_at")
    private LocalDateTime createdAt = LocalDateTime.now(); //Já deixando a data ser iniciada na criação da entidade;

    public Pessoa(PessoaInsertDTO pessoaInsertDTO) {
        this.nome = pessoaInsertDTO.nome();
        this.sobrenome = pessoaInsertDTO.sobrenome();
        this.email = pessoaInsertDTO.email();
        this.fone = pessoaInsertDTO.fone();
    }
}
