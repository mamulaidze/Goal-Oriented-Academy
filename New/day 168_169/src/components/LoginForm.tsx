
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {

  }

  return (
    <Card className="w-full max-w-sm mx-auto mt-10">
      <CardHeader>
        <CardTitle className="text-xl">შესვლა</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => { e.preventDefault(); handleLogin() }}>
          <div className="grid gap-4">
            <div>
              <Label htmlFor="email">ელ-ფოსტა</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="შეიყვანე ელ-ფოსტა"
              />
            </div>
            <div>
              <Label htmlFor="password">პაროლი</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="შეიყვანე პაროლი"
              />
            </div>
            <Button type="submit" className="w-full">შესვლა</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
