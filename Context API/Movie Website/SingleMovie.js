import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { url } from './Context/NodeState';

export default function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchApi = async (url) => {
    try {
      const res = await axios.get(url);
      setMovie(res.data);
      setLoading(false);
    } catch (error) {
      console.log('Error fetching API!', error);
    }
  };

  useEffect(() => {
    fetchApi(`${url}&i=${id}`);
  }, [id]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <section className="movie-section">
          <div className="movie-card">
            <figure>
              <img src={movie.Poster} alt={movie.Title} />
            </figure>
            <div className="card-content">
              <p className="title">{movie.Title}</p>
              <p className=""></p>
              <p className="card-text">{movie.Released}</p>
              <p className="card-text">{movie.Genre}</p>
              <p className="card-text">{movie.imdbRating} / 10</p>
              <p className="card-text">{movie.Country}</p>
        {
          movie&& movie.Ratings.map((e,i)=>{
            return <div key={i}>
              <p>{e.Source}</p>
              <p>{e.Value}</p>
            </div>
          })
        }
              <Link to="/" className="back-btn">
                Go Back
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
