'use client'

import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import { useState } from 'react'
import Modal from './modal'

export default function BotaoInserir() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div>
      <Button
        className="fixed bottom-24 right-5 bg-gray-400 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blue-[0.5rem] shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
        onClick={openModal}
      >
        <Plus />
      </Button>

      <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>
    </div>
  )
}
