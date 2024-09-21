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
import { Button } from './ui/button'
import { useState } from 'react'
import ModalAtualizarPessoa from './modal-update-pessoa'

interface PessoaCardProps {
  pessoa: PessoaDisplayDTO
}

export default function PessoaCard({ pessoa }: PessoaCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <Card className="w-72 m-2" key={pessoa.id}>
        <CardHeader>
          <CardTitle>
            {pessoa.nome} {pessoa.sobrenome} {pessoa.id}
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
            <a className="underline" href={`mailto:${pessoa.email}`}>
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
            <Button variant="destructive">
              <UserX />
            </Button>
            <Button variant="secondary" onClick={openModal}>
              <UserRoundPen />
            </Button>
          </div>
        </CardFooter>
      </Card>

      {/* Modal de atualização */}
      <ModalAtualizarPessoa
        isOpen={isModalOpen}
        onClose={closeModal}
        pessoa={pessoa}
      />
    </>
  )
}
