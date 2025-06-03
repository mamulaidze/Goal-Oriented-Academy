// components/RegisterForm.tsx
"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function RegisterForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const handleRegister = () => {
    // რეგისტრაციის ლოგიკა
    console.log({ name, email, password })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>რეგისტრაცია</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => { e.preventDefault(); handleRegister() }}>
          <div className="grid gap-4">
            <div>
              <Label htmlFor="name">სახელი</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="შეიყვანე სახელი"
              />
            </div>
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
            <Button type="submit" className="w-full">დარეგისტრირდი</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
