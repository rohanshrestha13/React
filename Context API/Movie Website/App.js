import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NodeState from './Context/NodeState'
import Movie from './Movie'
import SingleMovie from './SingleMovie'

export default function App() {
  return (
    <div>
      <NodeState>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Movie />} ></Route>
          <Route path='/single/:id' element={<SingleMovie />} ></Route>
        </Routes>
      </BrowserRouter>
      </NodeState>
    </div>
  )
}
