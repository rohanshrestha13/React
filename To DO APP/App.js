import React from 'react'
import { useState } from 'react'

export default function App() {
  const [text,setText] = useState('');
  const [list,setList] = useState([]);
  const add = () =>{
    if (!text){

    }
    else{
      setList([...list, text]);
      setText('');
    }
  }

  const remove = (index) =>{
    const newlist = list.filter((e,i)=>{
      return i !== index;
    })
    setList(newlist);
  }
  return (
    <div>
      <input type='text' value={text} onChange={(e)=>setText(e.target.value)} />
      <br />
      <button onClick={add}>Add</button>
      {
         list.map((e,i)=>{
          return <div key={i}>
              <h1>{e}</h1>
              <button onClick={() => remove(i)}>remove</button>
            </div>
        })
      }
    </div>
  )
}
