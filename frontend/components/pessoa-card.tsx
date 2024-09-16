'use client'

import { PessoaDisplayDTO } from '@/types/pessoa'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from './ui/card'

import {
  CalendarFold,
  CircleCheck,
  CircleX,
  Mail,
  Phone,
  UserRoundPen,
  UserX
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { listarPessoas } from '@/services/pessoa-service'

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
    <div className="flex">
      {pessoas.map(pessoa => (
        <Card className="w-72 m-2" key={pessoa.id}>
          <CardHeader>
            <CardTitle>
              {pessoa.nome} {pessoa.sobrenome}
            </CardTitle>
            <CardDescription className="flex gap-1">
              {pessoa.isActive ? (
                <p className="flex gap-1">
                  Ativo <CircleCheck className="text-green-500" />
                </p>
              ) : (
                <p className="flex gap-1">
                  Inativo <CircleX className="text-red-500" />
                </p>
              )}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Mail />
              <a className="underline" href="mailto:{pessoa.fone}">
                {pessoa.email}
              </a>
            </div>
            <div className="flex gap-2">
              <Phone />
              <p>{pessoa.fone}</p>
            </div>
            <div className="flex gap-2">
              <CalendarFold />
              {new Date(pessoa.createdAt).toLocaleDateString()}
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex gap-2">
              <UserX />
              <UserRoundPen />
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
