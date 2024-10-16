package com.bhh.backend.service;

import com.bhh.backend.dto.PessoaDisplayDTO;
import com.bhh.backend.dto.PessoaInsertDTO;
import com.bhh.backend.dto.PessoaUpdateDTO;
import com.bhh.backend.entity.Pessoa;
import com.bhh.backend.exceptions.PessoaException;
import com.bhh.backend.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository pessoaRepository;

    public List<PessoaDisplayDTO> listarPessoas() {
        List<Pessoa> pessoas = pessoaRepository.findAll();

        return pessoas.stream()
                .map(this::ConvertePessoaDTO
                ).toList();
    }

    public PessoaDisplayDTO buscarPessoaId(Long pessoaId) {
        Pessoa pessoa = pessoaRepository.findById(pessoaId)
                .orElseThrow(() -> new PessoaException("Pessoa não encontrada"));

        return ConvertePessoaDTO(pessoa);
    }

    public PessoaDisplayDTO inserirPessoa(PessoaInsertDTO pessoaInsertDTO) {
        Pessoa novaPessoa = new Pessoa(pessoaInsertDTO);

        novaPessoa = pessoaRepository.save(novaPessoa);

        return ConvertePessoaDTO(novaPessoa);
    }

    public PessoaDisplayDTO atualizarPessoa(Long pessoaId, PessoaUpdateDTO pessoaUpdateDTO) {
        Pessoa pessoa = pessoaRepository.findById(pessoaId)
                .orElseThrow(() -> new PessoaException("Pessoa não encontrada"));

        if (pessoaUpdateDTO.nome() != null && !pessoaUpdateDTO.nome().isEmpty() && !Objects.equals(pessoaUpdateDTO.nome(), pessoa.getNome())) {
            pessoa.setNome(pessoaUpdateDTO.nome());
        }

        if (pessoaUpdateDTO.sobrenome() != null && !pessoaUpdateDTO.sobrenome().isEmpty() && !Objects.equals(pessoaUpdateDTO.sobrenome(), pessoa.getSobrenome())) {
            pessoa.setSobrenome(pessoaUpdateDTO.sobrenome());
        }

        if (pessoaUpdateDTO.email() != null && !pessoaUpdateDTO.email().isEmpty() && !Objects.equals(pessoaUpdateDTO.email(), pessoa.getEmail())) {
            pessoa.setEmail(pessoaUpdateDTO.email());
        }

        if (pessoaUpdateDTO.fone() != null && !pessoaUpdateDTO.fone().isEmpty() && !Objects.equals(pessoaUpdateDTO.fone(), pessoa.getFone())) {
            pessoa.setFone(pessoaUpdateDTO.fone());
        }

        if (!Objects.equals(pessoaUpdateDTO.isActive(), pessoa.getIsActive())) {
            pessoa.setIsActive(pessoaUpdateDTO.isActive());
        }

        pessoa = pessoaRepository.save(pessoa);

        return ConvertePessoaDTO(pessoa);
    }

    public void deletarPessoa(Long pessoaId) {
        Pessoa pessoa = pessoaRepository.findById(pessoaId)
                .orElseThrow(() -> new PessoaException("Pessoa não encontrada"));

        pessoaRepository.delete(pessoa);
    }

    private PessoaDisplayDTO ConvertePessoaDTO(Pessoa pessoa) {
        return new PessoaDisplayDTO(pessoa.getId(),
                pessoa.getNome(),
                pessoa.getSobrenome(),
                pessoa.getEmail(),
                pessoa.getFone(),
                pessoa.getIsActive(),
                pessoa.getCreatedAt());
    }
}
