'use client'

import React, { useEffect, useState } from 'react'
import { PessoaDisplayDTO } from '../types/pessoa'
import { listarPessoas } from '@/services/pessoa-service'

const PessoaList: React.FC = () => {
  const [pessoas, setPessoas] = useState<PessoaDisplayDTO[]>([])

  useEffect(() => {
    const fetchPessoas = async () => {
      const data = await listarPessoas()
      setPessoas(data)
    }

    fetchPessoas()
  }, [])

  return (
    <div>
      <h1>Lista de Pessoas</h1>
      <ul>
        {pessoas.map(pessoa => (
          <li key={pessoa.id}>
            {pessoa.nome} {pessoa.sobrenome} - {pessoa.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PessoaList
