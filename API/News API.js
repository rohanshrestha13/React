import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function News() {
  const [titles, settitles] = useState([]); 
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b2ebe323d1714509a0ab7eaf2c4a6997`;

  const fetch_api = async() => {
    try{
      const response = await axios.get(url);
      settitles(response.data.articles);
    }
   catch(error){
    console.log("Error feching API!", error);
   }    
  }
    useEffect(()=>{
    fetch_api();
    });
    
    const imagestyle = {
        width: '60%',
        margin: '10px',
        padding: '10px',
        border: '1px solid #ccc',
    }
    const styling = {   
        paddingRight:'50px',
    }


  return (
    <div>

     {
      titles.map((e,i)=>{
       return <div key ={i} style={styling}> 
       <h3>{i+1}. {e.title}</h3>
       <img src={e.urlToImage} style={imagestyle} alt={i}></img>
       <h3><i>Author: {e.author}</i></h3>
       <p>{e.description}</p>
       <a href={e.url}>Read More</a>
       </div>
      })

     }
     
        
    </div>
  )

  }