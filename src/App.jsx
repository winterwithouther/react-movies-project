import { useState } from 'react'
import { Routes, Route } from 'react-router'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import './App.css'
import Favorites from './pages/Favorites'
import Navbar from './components/Navbar'

function App() {
  const movieNumber = 1

  return (
    <>
      <div>
        <Navbar/>
        <main className='main-content'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
          </Routes>
        </main>
      </div>
    </>
  )
}


export default App
