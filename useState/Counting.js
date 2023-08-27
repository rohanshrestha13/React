import React, { useState } from 'react'

export default function Counting() {
    const [value,setValue] = useState(0);
    let increase = () =>{
        setValue(value+1);
    }
    let decrease = () =>{
        setValue(value-1);
    }
    if(value<0){
        setValue(0);
    }
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={increase}>Increase Number</button>
        <br /> <br />
        <button onClick={decrease}>Decrease Number</button>
    </div>
  )
}
