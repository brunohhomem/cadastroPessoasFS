import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Login(){
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="bg-slate-500 p-2 rounded-lg shadow-lg">
        <Card className="w-72 m-2">
        <CardHeader>
          <CardTitle>
            Sistema de Cadastro de Pessoas
          </CardTitle>
          <CardDescription className="flex gap-1">
            <h2>Efetue login para continuar</h2>
          </CardDescription>
        </CardHeader>
        <CardContent>

        </CardContent>
        <CardFooter>
          <div className="flex gap-2">
          </div>
        </CardFooter>
      </Card>
    </div>
  </main>
  )
}
