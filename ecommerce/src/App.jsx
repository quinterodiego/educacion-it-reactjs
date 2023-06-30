import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Product } from './components/Product'
import { Page404 } from './components/Page404'
// import './App.css'

export const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}