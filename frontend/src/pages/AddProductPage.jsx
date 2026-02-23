import { useState } from 'react'
import client from '../api/client'

const initialState = {
  name: '',
  description: '',
  price: '',
  imageUrl: '',
  artisanName: '',
}

export default function AddProductPage() {
  const [form, setForm] = useState(initialState)
  const [message, setMessage] = useState('')

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      await client.post('/products', { ...form, price: Number(form.price) })
      setMessage('Product added successfully.')
      setForm(initialState)
    } catch {
      setMessage('Failed to add product.')
    }
  }

  return (
    <section>
      <h2>Add Product (Artisan)</h2>
      <form onSubmit={onSubmit} className="form">
        <input name="name" value={form.name} onChange={onChange} placeholder="Product name" required />
        <textarea name="description" value={form.description} onChange={onChange} placeholder="Description" required />
        <input name="price" type="number" min="0" value={form.price} onChange={onChange} placeholder="Price" required />
        <input name="imageUrl" value={form.imageUrl} onChange={onChange} placeholder="Image URL" required />
        <input name="artisanName" value={form.artisanName} onChange={onChange} placeholder="Artisan name" required />
        <button type="submit">Save</button>
      </form>
      {message && <p>{message}</p>}
    </section>
  )
}
