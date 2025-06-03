
"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"

export default function AuthTabs() {
  return (
    <Tabs defaultValue="login" className="w-full max-w-md mx-auto mt-10">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">შესვლა</TabsTrigger>
        <TabsTrigger value="register">რეგისტრაცია</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LoginForm />
      </TabsContent>
      <TabsContent value="register">
        <RegisterForm />
      </TabsContent>
    </Tabs>
  )
}
