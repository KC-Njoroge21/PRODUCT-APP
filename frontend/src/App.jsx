import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import CreateProduct from './pages/CreateProduct'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateProduct />} />
      </Routes>
    </div>
  )
}

export default App