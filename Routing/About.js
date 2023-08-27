import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About () {
    const navigate = useNavigate()
    let navigator = () => {
        navigate('/');
    }
  return (
    <div>
        <h1>Hello from about page</h1>
        <button onClick={navigator}>Go To Home Page</button>
    </div>
  )
}
