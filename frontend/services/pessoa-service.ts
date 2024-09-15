import api from './api'
import {
  PessoaInsertDTO,
  PessoaDisplayDTO,
  PessoaUpdateDTO
} from '../types/pessoa'

export const listarPessoas = async (): Promise<PessoaDisplayDTO[]> => {
  const response = await api.get<PessoaDisplayDTO[]>('/listarPessoas')
  return response.data
}

export const buscarPessoa = async (
  pessoaId: number
): Promise<PessoaDisplayDTO> => {
  const response = await api.get<PessoaDisplayDTO>(`/buscarPessoa/${pessoaId}`)
  return response.data
}

export const inserirPessoa = async (
  pessoa: PessoaInsertDTO
): Promise<PessoaDisplayDTO> => {
  const response = await api.post<PessoaDisplayDTO>('/inserirPessoa', pessoa)
  return response.data
}

export const atualizarPessoa = async (
  pessoaId: number,
  pessoa: PessoaUpdateDTO
): Promise<PessoaDisplayDTO> => {
  const response = await api.put<PessoaDisplayDTO>(
    `/atualizarPessoa/${pessoaId}`,
    pessoa
  )
  return response.data
}

export const deletarPessoa = async (pessoaId: number): Promise<void> => {
  await api.delete(`/deletarPessoa/${pessoaId}`)
}
