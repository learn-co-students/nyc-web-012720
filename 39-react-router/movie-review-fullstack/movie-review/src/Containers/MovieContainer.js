import React from 'react';
import MovieCard from '../Components/MovieCard'
import MoviePage from '../Components/MoviePage';

class MovieContainer extends React.Component {
  
  state = {
    selectedMovie: null
  }

  selectMovie = (id) => {
    this.setState({
      selectedMovie: id
    })
  }

  render(){
    let selectedMovie = this.props.movies.find(movie => movie.id === this.state.selectedMovie)
    return (
      <div className="movie-container">
        {this.state.selectedMovie 
          ? <MoviePage {...selectedMovie}/>
          : this.props.movies.map(movie => <MovieCard key={movie.id} handleClick={this.selectMovie} movie={movie} />)
        }
      </div>
    );
  }
}

export default MovieContainer;