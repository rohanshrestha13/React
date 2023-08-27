import React, { useState } from 'react'

export default function Form() {
    const [text, setText] = useState('');
	const [data, setData] = useState(false);
	let handledata = () => {
		setData(true);
	}
	let uppercase = () =>{
		setText(text.toUpperCase());
	}

	let lowercase = () =>{
		setText(text.toLowerCase());
	}

  return (
	<div>
		<form>
			<input type='text' onChange={(e)=>{setText(e.target.value)}} />
			<button onClick={handledata} type="button">Submit</button>
			<br /> <br />
			<button onClick={uppercase} type="button">Change To Uppercase</button>
			<br /> <br />
			<button onClick={lowercase} type="button">Change To Lowecase</button>
		</form>
		{data?<div>Name: {text}</div>:<div></div>}
	</div>
  )
}
