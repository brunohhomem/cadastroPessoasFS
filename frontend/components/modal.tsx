import { PessoaInsertDTO } from '@/types/pessoa'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { X } from 'lucide-react'
import { inserirPessoa } from '@/services/pessoa-service'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const [formData, setFormData] = useState<PessoaInsertDTO>({
    nome: '',
    sobrenome: '',
    email: '',
    fone: ''
  })

  const [loading, setLoading] = useState(false) // Para mostrar o estado de carregamento
  const [error, setError] = useState<string | null>(null) // Para exibir erros

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleClear = () => {
    setFormData({
      nome: '',
      sobrenome: '',
      email: '',
      fone: ''
    })
  }

  const handleOnClose = () => {
    onClose()
    handleClear()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true) // Começa o estado de carregamento
    setError(null) // Reseta o erro

    try {
      // Envia os dados para o backend usando inserirPessoa
      const pessoaCadastrada = await inserirPessoa(formData)
      console.log('Pessoa cadastrada:', pessoaCadastrada)

      // Fechar o modal após o sucesso
      onClose()

      // Recarregar a página
      window.location.reload()
    } catch (error: unknown) {
      setError('Erro ao cadastrar pessoa. Tente novamente.')
      console.error('Erro ao cadastrar pessoa:', error)
    } finally {
      setLoading(false) // Finaliza o estado de carregamento
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-gray-950 bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-slate-200 rounded-lg shadow-lg p-6 w-full max-w-md">
        <div className="flex justify-end">
          <Button
            onClick={handleOnClose}
            className="w-[3rem] h-[3rem] rounded-full bg-gray-700 text-gray-50 hover:text-gray-900 hover:bg-gray-500"
          >
            <X />
          </Button>
        </div>
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Cadastro de Pessoa
        </h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              className="text-gray-950 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
              placeholder="Nome"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Sobrenome
            </label>
            <input
              type="text"
              name="sobrenome"
              value={formData.sobrenome}
              onChange={handleInputChange}
              className="text-gray-950 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
              placeholder="Sobrenome"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="text-gray-950 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
              placeholder="email@email.com"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Telefone
            </label>
            <input
              type="tel"
              name="fone"
              value={formData.fone}
              onChange={handleInputChange}
              className="text-gray-950 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
              placeholder="(99)99999-9999"
            />
          </div>

          <div className="flex justify-between">
            <Button
              type="submit"
              className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={loading} // Desabilita o botão se estiver carregando
            >
              {loading ? 'Enviando...' : 'Enviar'}
            </Button>
            <Button
              onClick={handleClear}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            >
              Limpar
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
