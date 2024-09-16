import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from './ui/card'

import {
  BadgeCheck,
  CalendarFold,
  Mail,
  Phone,
  UserRoundPen,
  UserX
} from 'lucide-react'

export default function PessoaCard() {
  return (
    <Card className="w-72">
      <CardHeader>
        <CardTitle>Bruno Homem</CardTitle>
        <CardDescription className="flex gap-2">
          Ativo
          <BadgeCheck />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Mail />
          <a className="underline" href="mailto:brunohhomem@email.com">
            brunohhomem@email.com
          </a>
        </div>
        <div className="flex gap-2">
          <Phone />
          <p>(11) 9988771166</p>
        </div>
        <div className="flex gap-2">
          <CalendarFold />
          <p>25/12/2024</p>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex gap-2">
          <UserX />
          <UserRoundPen />
        </div>
      </CardFooter>
    </Card>
  )
}
