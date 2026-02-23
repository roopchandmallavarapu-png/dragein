import { useState } from 'react'
import client from '../api/client'

export default function RegisterPage() {
  const [form, setForm] = useState({ fullName: '', email: '', password: '', role: 'CUSTOMER' })
  const [message, setMessage] = useState('')

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await client.post('/auth/register', form)
      setMessage('Registration successful')
      setForm({ fullName: '', email: '', password: '', role: 'CUSTOMER' })
    } catch {
      setMessage('Registration failed')
    }
  }

  return (
    <section>
      <h2>Register</h2>
      <form className="form" onSubmit={onSubmit}>
        <input name="fullName" value={form.fullName} onChange={onChange} placeholder="Full name" required />
        <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" required />
        <input name="password" type="password" value={form.password} onChange={onChange} placeholder="Password" required />
        <select name="role" value={form.role} onChange={onChange}>
          <option value="CUSTOMER">Customer</option>
          <option value="ARTISAN">Artisan</option>
          <option value="CONSULTANT">Consultant</option>
          <option value="ADMIN">Admin</option>
        </select>
        <button type="submit">Create Account</button>
      </form>
      {message && <p>{message}</p>}
    </section>
  )
}
