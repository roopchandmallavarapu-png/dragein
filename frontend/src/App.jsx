import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import AddProductPage from './pages/AddProductPage'
import OrdersPage from './pages/OrdersPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

export default function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/new" element={<AddProductPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    </>
  )
}
