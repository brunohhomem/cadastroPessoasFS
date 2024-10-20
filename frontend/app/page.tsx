import PessoaList from '@/components/pessoa-list'

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="bg-slate-700 p-2 rounded-lg shadow-lg">
        <PessoaList />
      </div>
    </main>
  )
}
