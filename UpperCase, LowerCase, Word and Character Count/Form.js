import React from 'react'
import { useState } from 'react'

export default function Form() {
  const[text,setText] = useState('');
  const uppercase = () => {
    setText(text.toUpperCase());
  }
  const lowercase = () => {
    setText(text.toLowerCase());
  }
  const clear = () => {
    setText('');
  }
  const tooglecase = () => {
    setText(
      text.toLowerCase() === text
        ? text.toUpperCase()
        : text.toLowerCase()
    );
  };
  return (
    <div>
      <input type='text' value={text} onChange={(e)=>setText(e.target.value)} />
      <br />
      <p>Word Length: {text.split(" ").length}</p>
      <p>Character Length: {text.length}</p>
      <button onClick={uppercase}>Uppercase</button>
      <button onClick={lowercase}>Lowercase</button>
      <button onClick={tooglecase}>Change Case</button>
      <button onClick={clear}>Clear</button>
    </div>
  )
}
