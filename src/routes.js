import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Repositores from './pages/Repositories/index'
import Home from './pages/Home/index'

export default function Rota() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/pages/repositories" element={<Repositores />} />
    </Routes>
  )
}
