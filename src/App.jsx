import { useState } from 'react'
import { Routes, Route } from 'react-router'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import './App.css'
import Favorites from './pages/Favorites'

function App() {
  const movieNumber = 1

  return (
    <>
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
      </main>
    </>
  )
}


export default App
