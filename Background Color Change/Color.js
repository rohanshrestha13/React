import React, { useState } from 'react'

export default function Color() {
    const [btn, setBtn] = useState('Enable Dark Mode');
    const [style,setStyle] = useState({
        color:'black',
        backgroundColor: 'white',
    })
    let colorgrid = () =>{
        if(style.backgroundColor === 'white'){
            setStyle({
                color:'white',
                backgroundColor: 'black',
            })
            setBtn('Enable Light Mode');
          }
          else{
            setStyle({
                color:'black',
                backgroundColor: 'white',
            })
            setBtn('Enable Dark Mode');
          }
    }
  
  return (
    <div style={style}>
        <h1>Color Change</h1>
        <p>Click the button below to change colors!</p>
        <button onClick={colorgrid}>{btn}</button>
    </div>
  )
}
