import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navbar">
      <h1>TribalCraft</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/products/new">Add Product</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  )
}
