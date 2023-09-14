import React from 'react'
import Title from './Title'
import NodeState from './Context/NodeState'

export default function App() {
  return (
    <NodeState>
    <div>
      <Title />
    </div>
    </NodeState>
  )
}
