import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
    let navigator = () => {
        navigate('/about');
    }
  return (
    <div>
        <h1>Hello from home page</h1>
        <button onClick={navigator}>Go To About Page</button>
    </div>
  )
}
