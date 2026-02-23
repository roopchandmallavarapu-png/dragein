import { useEffect, useState } from 'react'
import client from '../api/client'

export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')

  const loadProducts = async (keyword = '') => {
    try {
      const response = await client.get('/products', { params: { q: keyword } })
      setProducts(response.data)
      setError('')
    } catch {
      setError('Unable to load products. Make sure backend is running.')
    }
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <section>
      <h2>Products</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          loadProducts(query)
        }}
        className="row"
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products"
        />
        <button type="submit">Search</button>
      </form>

      {error && <p className="error">{error}</p>}

      <div className="grid">
        {products.map((product) => (
          <article className="card" key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>Artisan:</strong> {product.artisanName}</p>
            <p><strong>₹{product.price}</strong></p>
          </article>
        ))}
      </div>
    </section>
  )
}
