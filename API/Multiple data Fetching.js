import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function App() {
  const [users, setUsers] = useState([]); 
  const url = `https://jsonplaceholder.typicode.com/users`;

  const fetch_api = async() => {
    try{
      const response = await axios.get(url);
      setUsers(response.data);
    }
   catch(error){
    console.log("Error feching API!", error);
   }    
  }
    useEffect(()=>{
    fetch_api();
    });
    

  return (
    <div>
     {
      users.map((e,i)=>{
       return <h1 key={i}>{e.username}</h1>
      })
     }
        
        
    </div>
  )

  }