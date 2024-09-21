import { useState } from 'react'
import { PessoaUpdateDTO, PessoaDisplayDTO } from '@/types/pessoa'
import { atualizarPessoa } from '@/services/pessoa-service'

interface ModalAtualizarPessoaProps {
  isOpen: boolean
  onClose: () => void
  pessoa: PessoaDisplayDTO
}

export default function ModalAtualizarPessoa({
  isOpen,
  onClose,
  pessoa
}: ModalAtualizarPessoaProps) {
  const [formData, setFormData] = useState<PessoaUpdateDTO>({
    nome: pessoa.nome,
    sobrenome: pessoa.sobrenome,
    email: pessoa.email,
    fone: pessoa.fone,
    isActive: pessoa.isActive
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async () => {
    try {
      await atualizarPessoa(pessoa.id, formData)
      onClose() // Fecha o modal após a atualização

      // Recarregar a página
      window.location.reload()
    } catch (error) {
      console.error('Erro ao atualizar a pessoa', error)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Atualizar Pessoa
        </h2>
        <div className="mb-2">
          <label htmlFor="nome" className="text-gray-950">
            Nome
          </label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            className="border w-full p-2 text-gray-950"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="sobrenome" className="text-gray-950">
            Sobrenome
          </label>
          <input
            type="text"
            name="sobrenome"
            value={formData.sobrenome}
            onChange={handleInputChange}
            className="border w-full p-2 text-gray-950"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="text-gray-950">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border w-full p-2 text-gray-950"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="fone" className="text-gray-950">
            Telefone
          </label>
          <input
            type="text"
            name="fone"
            value={formData.fone}
            onChange={handleInputChange}
            className="border w-full p-2 text-gray-950"
          />
        </div>
        <div className="mb-2 flex gap-2">
          <label htmlFor="isActive" className="text-gray-950">
            Ativo
          </label>
          <input
            type="checkbox"
            name="isActive"
            checked={formData.isActive}
            onChange={e =>
              setFormData(prevState => ({
                ...prevState,
                isActive: e.target.checked
              }))
            }
            className="border"
          />
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white p-2 rounded mr-2"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Atualizar
          </button>
        </div>
      </div>
    </div>
  )
}
