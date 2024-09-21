'use client'

import { useEffect, useState } from 'react'
import { listarPessoas } from '@/services/pessoa-service'
import { PessoaDisplayDTO } from '@/types/pessoa'
import PessoaCard from './pessoa-card'

export default function PessoaList() {
  const [pessoas, setPessoas] = useState<PessoaDisplayDTO[]>([])

  useEffect(() => {
    const fetchPessoas = async () => {
      const data = await listarPessoas()
      // Ordenar as pessoas pelo nome em ordem alfabética
      const sortedData = data.sort((a, b) => a.nome.localeCompare(b.nome))
      setPessoas(sortedData)
    }

    fetchPessoas()
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {pessoas.map(pessoa => (
        <PessoaCard key={pessoa.id} pessoa={pessoa} />
      ))}
    </div>
  )
}
