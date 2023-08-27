import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'

export default function App() {

  return (
	<div>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
			</Routes>
		</BrowserRouter>
	</div>
  )
}
