import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import ProgressBar from './components/ProgressBar'

import Registration from './pages/Registration'
import Home from './pages/Home'

import PageNotFound from './routes/PageNotFound'

import ShoppingCart from './components/ShoppingCart'
import Cart from './pages/Cart'



function App() {
  
  return (
   <div>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Registration />} />

      <Route path='/progress' element={<ProgressBar />} />
      <Route path='/pagenotfound' element={<PageNotFound />} />

      <Route path='/cart' element={<Cart />} />
      

    </Routes>
    
    </BrowserRouter>
   </div>
    

   
    

  )
}

export default App
