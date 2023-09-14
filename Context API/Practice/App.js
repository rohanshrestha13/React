import React from 'react'
import NodeState from './Context/NodeState'
import About from './About'

export default function App() {
  return (
    <NodeState>
    <div>
        <About />
    </div>
    </NodeState>
  )
}
