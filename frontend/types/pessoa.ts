export interface Pessoa {
  id: number
  nome: string
  sobrenome: string
  email: string
  fone: string
  isActive: boolean
  createdAt: string
}

export interface PessoaDisplayDTO {
  id: number
  nome: string
  sobrenome: string
  email: string
  fone: string
  isActive: boolean
  createdAt: string
}

export interface PessoaInsertDTO {
  nome: string
  sobrenome: string
  email: string
  fone: string
}

export interface PessoaUpdateDTO {
  nome: string
  sobrenome: string
  email: string
  fone: string
  isActive: boolean
}
