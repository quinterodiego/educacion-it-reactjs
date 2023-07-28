import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Product } from './components/Product'
import { Page404 } from './components/Page404'
import { CartContextProvider } from './context/CartContext'
import { CartPage } from './components/CartPage';

export const App = () => {

  return (
    <CartContextProvider>
      <div className="container">
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/*' element={<Page404 />} />
        </Routes>
      </div>
    </CartContextProvider>
  )
}