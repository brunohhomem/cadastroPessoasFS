import Header from '@/components/header'
import PessoaCard from '@/components/pessoa-card'
// import PessoaList from '@/components/pessoa-list'

export default function Home() {
  return (
    <div className="m-2">
      <Header />
      <div className="">
        <PessoaCard />
      </div>
    </div>
  )
}
