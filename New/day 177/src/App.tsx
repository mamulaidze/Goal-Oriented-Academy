import { Routes, Route } from 'react-router-dom'
import { SignIn, SignUp, SignedIn, SignedOut, UserButton, RedirectToSignIn } from '@clerk/clerk-react'

function HomePage() {
  return (
    <div className="p-8">
      <SignedIn>
        <h1 className="text-2xl font-bold mb-4">მოგესალმები!</h1>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-in" element={<SignIn routing="path" path="/sign-in" />} />
      <Route path="/sign-up" element={<SignUp routing="path" path="/sign-up" />} />
    </Routes>
  )
}

export default App
