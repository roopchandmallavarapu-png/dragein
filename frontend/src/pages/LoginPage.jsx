import { useState } from 'react'
import client from '../api/client'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await client.post('/auth/login', { email, password })
      setMessage(`Welcome ${response.data.fullName} (${response.data.role})`)
    } catch {
      setMessage('Invalid credentials')
    }
  }

  return (
    <section>
      <h2>Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </section>
  )
}
