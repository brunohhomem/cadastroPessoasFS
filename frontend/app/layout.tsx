import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import BotaoInserir from '@/components/botao-inserir'
import Footer from '@/components/footer'
import Header from '@/components/header'
import BotaoReload from '@/components/botao-reload'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <BotaoInserir />
        <BotaoReload />
        <Footer />
      </body>
    </html>
  )
}
