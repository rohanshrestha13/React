import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Movie from './Movie'
import Error from './Error'
import Home from './Home'

export default function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/movie/:id' element={<Movie />}></Route>
            <Route path='*' element={<Error />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}
