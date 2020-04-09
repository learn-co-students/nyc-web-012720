import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import MovieContainer from './Containers/MovieContainer';
import {API_BASE} from './constants';

class App extends React.Component {
  state = {
    movies: []
  }

  componentDidMount(){
    fetch(`${API_BASE}/movies`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        movies: data
      })
    })
  }


  render(){
    return (
      <div className="App">
        <NavBar /> 
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login}/>
          <Route path="/movies" render={routerProps => <MovieContainer {...routerProps} movies={this.state.movies} />} />
          <Route exact path="/" render={() => <div>HOME SWEET HOME</div>} />
        </Switch>
      </div>
    )
  }
}

export default App;