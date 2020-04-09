import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MovieCard from '../Components/MovieCard'
import MoviePage from '../Components/MoviePage';

class MovieContainer extends React.Component {
  
  state = {
    selectedMovie: null
  }

  render(){
    // console.log('movie container props: ', this.props)
    let selectedMovie = this.props.movies.find(movie => movie.id === this.state.selectedMovie)
    return (
      <div className="movie-container"> 
        <Switch>
          <Route path="/movies/:id" component={MoviePage} />
          <Route path="/movies" render={() => this.props.movies.map(movie => <MovieCard key={movie.id} movie={movie} />)} />
        </Switch>
      </div>
    );
  }
}

export default MovieContainer;