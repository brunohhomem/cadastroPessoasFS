'use client'

import { RotateCcw } from 'lucide-react'
import { Button } from './ui/button'

export default function BotaoReload() {
  const handleReload = () => {
    window.location.reload() // Função que recarrega a página
  }

  return (
    <div>
      <Button
        className="fixed bottom-24 left-5 bg-gray-400 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blue-[0.5rem] shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
        onClick={handleReload}
      >
        <RotateCcw />
      </Button>
    </div>
  )
}



