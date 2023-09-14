import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Context from './NodeContext'

export default function NodeState( {children}) {
    const [movie, setMovie] = useState([]);
    const [search, setSearch] = useState('avengers');
    const [loading, setLoading] = useState(true);
    const fetch_api = async () => {
        const url = `https://www.omdbapi.com/?apikey=c86f5569&s=${search}`;
        try{
            const res = await axios.get(url);
            setLoading(false);
            setMovie(res.data.Search);

        }
        catch(error){
            console.log("Error fetching API!",error);
        }
    }

    useEffect(()=>{
        fetch_api();
        // eslint-disable-next-line
    },[search])

  return (
    <div>
        <Context.Provider value = {{movie, search, setSearch}}>
                {
                    !loading?( <>{children} </>):(<h1>Loading!</h1>)
                }
                       
        </Context.Provider>
    </div>
  )
}
