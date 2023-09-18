import React, { useContext } from 'react';
import Context from './Context/NodeContext';
import { Link } from 'react-router-dom';

export default function Movie() {
  const { movie, search, setSearch } = useContext(Context);

  return (
    <div>
      <input type='text' onChange={(e) => setSearch(e.target.value)} />
      <h1>{search}</h1>
      {movie ? (
        movie.map((value, i) => (
          <div key={i}>
            <Link to={`/single/${value.imdbID}`}>
              <h1>{value.Title}</h1>
              <img src={value.Poster} alt={value.Title} />
            </Link>
          </div>
        ))
      ) : (
        <h1>No Movies Found!</h1>
      )}
    </div>
  );
}
