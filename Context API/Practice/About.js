import React, { useContext, useEffect } from 'react'
import NodeContext from './Context/NodeContext'

export default function About() {
    const a = useContext(NodeContext);
    useEffect(()=>{
      a.update();
      //eslint-disable-next-line
    },[])
  return (
    <div>
        <h1>I am {a.state.name} and my age is {a.state.age}</h1>
    </div>
  )
}
