import { useEffect, useState } from 'react'
import client from '../api/client'

export default function OrdersPage() {
  const [orders, setOrders] = useState([])
  const [products, setProducts] = useState([])
  const [form, setForm] = useState({ customerName: '', customerEmail: '', productId: '', quantity: 1 })
  const [message, setMessage] = useState('')

  const loadData = async () => {
    const [ordersRes, productsRes] = await Promise.all([
      client.get('/orders'),
      client.get('/products'),
    ])
    setOrders(ordersRes.data)
    setProducts(productsRes.data)
  }

  useEffect(() => {
    loadData().catch(() => setMessage('Failed to load orders/products'))
  }, [])

  const placeOrder = async (e) => {
    e.preventDefault()
    try {
      await client.post('/orders', { ...form, productId: Number(form.productId), quantity: Number(form.quantity) })
      setMessage('Order placed successfully.')
      setForm({ customerName: '', customerEmail: '', productId: '', quantity: 1 })
      await loadData()
    } catch {
      setMessage('Failed to place order.')
    }
  }

  return (
    <section>
      <h2>Orders</h2>
      <form className="form" onSubmit={placeOrder}>
        <input placeholder="Customer name" value={form.customerName} onChange={(e) => setForm({ ...form, customerName: e.target.value })} required />
        <input type="email" placeholder="Customer email" value={form.customerEmail} onChange={(e) => setForm({ ...form, customerEmail: e.target.value })} required />
        <select value={form.productId} onChange={(e) => setForm({ ...form, productId: e.target.value })} required>
          <option value="">Select product</option>
          {products.map((p) => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>
        <input type="number" min="1" value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} required />
        <button type="submit">Place Order</button>
      </form>

      {message && <p>{message}</p>}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Qty</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.product?.name}</td>
              <td>{order.quantity}</td>
              <td>₹{order.totalAmount}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
