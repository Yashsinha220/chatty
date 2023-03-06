import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import Chat from '../pages/chat'
import Register from '../pages/Register'
import Login from '../pages/Login'
import MainChat from '../pages/MainChat'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/login'  element = {<Login></Login>}></Route>
      <Route path='/'  element = {<MainChat></MainChat>}></Route>
      


    </Routes>
    </BrowserRouter>
    
  )
}

export default App
