import type { Metadata } from 'next'
import './globals.css'
import BotaoInserir from '@/components/botao-inserir'
// import Footer from '@/components/footer'
import Header from '@/components/header'
import BotaoReload from '@/components/botao-reload'
import { Montserrat } from 'next/font/google'

const font = Montserrat({
    subsets: ['latin'],
})


export const metadata: Metadata = {
  title: 'Cadastro de Pessoas',
  description: 'Cadastro de Pessoas FullStack'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="PTbr">
      <body
        className={font.className}
      >
        <Header />
        {children}
        <BotaoInserir />
        <BotaoReload />
        {/* <Footer /> */}
      </body>
    </html>
  )
}
