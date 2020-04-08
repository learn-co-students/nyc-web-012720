import React from 'react';

function MovieCard(props) {
  let {id, title, director, year, num_reviews, img} = props.movie;

  return (
      <div className="movie-card" onClick={() => props.handleClick(id)}>
          <img alt="movie poster" src={img} />
          <div className="movie-info">
              <h2>{title}</h2>
              <h4>{director}</h4>
              <div>{year}</div>
              <div>{num_reviews} Review{num_reviews > 1 && "s"}</div>
          </div>
      </div>
  );
}

export default MovieCard;