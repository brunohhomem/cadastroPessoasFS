'use client'

import React, { useEffect, useState } from 'react'
import { PessoaDisplayDTO } from '../types/pessoa'
import { listarPessoas } from '@/services/pessoa-service'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from './ui/card'

export default function PessoaCard() {
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
      {pessoas.map(pessoa => (
        <Card key={pessoa.id}>
          <CardHeader>
            <CardTitle>
              {pessoa.nome} {pessoa.sobrenome}
            </CardTitle>
            <CardDescription>{pessoa.email}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Telefone: {pessoa.fone}</p>
          </CardContent>
          <CardFooter>
            <p>Status: {pessoa.isActive ? 'Ativo' : 'Inativo'}</p>
            <p>
              Registrado em: {new Date(pessoa.createdAt).toLocaleDateString()}
            </p>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
