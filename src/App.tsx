import { useEffect, useState } from 'react'
import './App.css'
import { getAllBooks } from './utils/api'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Books from './components/Books'
import Users from './components/Users'
import Checkout from './components/Checkout'

function App() {
  const [allBooks, setAllBooks] = useState()
  useEffect(() => {
    getAllBooks()
    .then(response => {
      setAllBooks(response.data)
      console.log(response.data)
    })
  }, [])
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/books" element={<Books/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </div>
  )
}

export default App
