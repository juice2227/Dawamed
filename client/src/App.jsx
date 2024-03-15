import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'


import Registration from './pages/Registration'
import Home from './pages/Home'
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
      <Route path='/cart' element={<Cart />} />
      
    </Routes>
    
    </BrowserRouter>
   </div>
    

   
    

  )
}

export default App
