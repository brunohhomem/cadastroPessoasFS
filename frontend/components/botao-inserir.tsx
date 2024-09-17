import { Plus } from 'lucide-react'
import { Button } from './ui/button'

export default function BotaoInserir() {
  return (
    <Button className="fixed bottom-5 right-5 bg-gray-400 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blue-[0.5rem] shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all">
      <Plus />
    </Button>
  )
}
