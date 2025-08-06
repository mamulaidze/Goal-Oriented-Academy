// src/App.jsx
import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('...იტვირთება')

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/hello/')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(() => setMessage('დაკავშირება ვერ მოხერხდა'))
  }, [])

  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export default App
