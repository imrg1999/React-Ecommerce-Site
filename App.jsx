import React,{useState} from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Product from './Components/Product'
import ThemeContext from './Components/ThemeContext'
import Signin from './Components/Signin'


const App = () => {
  const[mode, setMode] = useState("dark");
    const changeTheme = () => {
      setMode(mode === "dark"? 'light' : 'dark'); }
  return (
    <>
    <BrowserRouter>
    <ThemeContext value={mode}>
      <Navbar
        button={
          <button onClick={changeTheme} className="theme-toggle-btn">
            {mode === 'dark' ? '🌙' : '☀️'}
          </button>
        }
      />
      
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/signin' element={<Signin/>}/>
    </Routes>
    </ThemeContext>
    </BrowserRouter>
    </>
  )
}

export default App