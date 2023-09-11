import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function WeatherAPI() {
  const [city, setCity] = useState([]);
  const [search, setSearch] = useState('kathmandu');
  const API = ``;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API}`;
  const fetch_api = async() => {
    try{
        const response = await axios.get(url);
        setCity(response.data.main);
      }
      catch(error){
        setCity(null);
      }
    }
    useEffect(()=>{

    fetch_api();
    });
    

  return (
    <div>
      <input type='text' onChange={(e)=>setSearch(e.target.value)} />
      {
        !city?(<h1>No data found!</h1>):(<div>
        <h1>{search}</h1>
        <h1>{city.temp}</h1>
        </div>
        )
      }
      
    </div>
  )
}
