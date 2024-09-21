'use client'

import { PessoaDisplayDTO, PessoaUpdateDTO } from '@/types/pessoa'
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
  Trash,
  UserRoundPen
} from 'lucide-react'
import { useState } from 'react'
import ModalAtualizarPessoa from './modal-update-pessoa'
import { atualizarPessoa, deletarPessoa } from '@/services/pessoa-service'

interface PessoaCardProps {
  pessoa: PessoaDisplayDTO
}

export default function PessoaCard({ pessoa }: PessoaCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  // Função para excluir ou inativar a pessoa
  const handleDeleteOrInactivate = async () => {
    const confirmAction = confirm(
      'Você realmente deseja excluir essa pessoa ou prefere inativá-la? \nOK para Excluir, Cancelar para Inativar.'
    )

    try {
      if (confirmAction) {
        // Se o usuário confirmar, excluir a pessoa
        await deletarPessoa(pessoa.id)
        alert('Pessoa excluída com sucesso!')
      } else {
        // Se o usuário cancelar, inativar a pessoa
        const updateData: PessoaUpdateDTO = {
          nome: pessoa.nome,
          sobrenome: pessoa.sobrenome,
          email: pessoa.email,
          fone: pessoa.fone,
          isActive: false // Inativar a pessoa
        }
        await atualizarPessoa(pessoa.id, updateData)
        alert('Pessoa inativada com sucesso!')
      }
    } catch (error) {
      console.error('Erro ao excluir ou inativar a pessoa', error)
    }
  }

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
            {/* Botão de editar */}
            <UserRoundPen onClick={openModal} />

            {/* Botão de excluir */}
            <Trash
              onClick={handleDeleteOrInactivate}
              className="text-red-500 cursor-pointer"
            />
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
