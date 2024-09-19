export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-50 bg-slate-500 mt-64">
      {/* <footer className="mb-10 mt-10 px-4 text-center text-gray-50 bg-slate-500 mt-64"> */}
      <p>
        <span>Criado com ❤️, utilizando: </span>
        <br />
        <span className="italic">
          React & NextJS (App Router & Server Actions), Typescript, Tailwind
          CSS, Framer Motion, React Email & Resend, Vercel hosting.{' '}
        </span>
      </p>
      <small> &copy; 2024. Todos os direitos reservados </small>
    </footer>
  )
}
