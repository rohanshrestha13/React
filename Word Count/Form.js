import React from 'react'
import { useState } from 'react'

export default function App() {
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
  const copy = () => {
   navigator.clipboard.writeText(text);
   alert('Copied!');
  };
  return (
    <div>
      <input type='text' value={text} onChange={(e)=>setText(e.target.value)} />
      <br />
      <p>Word Length: {text.split(" ").length}</p>
      <p>Character Length: {text.length}</p>
      <button onClick={uppercase}>Uppercase</button>
      <button onClick={lowercase}>Lowercase</button>
      <button onClick={copy}>Copy</button>
      <button onClick={clear}>Clear</button>
    </div>
  )
}
