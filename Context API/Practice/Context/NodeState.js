import React, { useState } from 'react'
import NodeContext from './NodeContext'

export default function NodeState({children}) {
    const s1 ={
        name: 'Rohan',
    }
   const [state, setState] = useState(s1); 
    let update = () => {
      setTimeout(()=>{

      setState({
        name: 'Rohan',
        age: 20
      })
    },2000);
    }
  return (
    <div>
        <NodeContext.Provider value={{state, update}}>
            {children}
        </NodeContext.Provider>
    </div>
  )
}
