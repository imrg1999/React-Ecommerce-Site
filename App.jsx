import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Product from './Components/Product'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product' element={<Product/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App