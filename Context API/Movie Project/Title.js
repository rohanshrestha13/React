import React, { useContext } from 'react'
import Context from './Context/NodeContext'

export default function Title() {
    const {movie, search, setSearch} = useContext(Context);

  return (
    <div>
        <input type='text' onChange={(e)=>setSearch(e.target.value)} />
        <h1>{search}</h1>
        {
            movie?(
                movie.map((value,i)=>{
                    return <div key={i}>
                        <h1>{value.Title}</h1>
                        <img src={value.Poster} alt={i} />
                        </div>
                })
            ):(<h1>No Movie Found!</h1>)
        }
    </div>
  )
}
