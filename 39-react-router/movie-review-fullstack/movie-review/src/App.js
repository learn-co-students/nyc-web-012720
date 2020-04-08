import React from 'react';
import './App.css';
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
        <NavBar/> 
        <MovieContainer movies={this.state.movies}/>
      </div>
    )
  }
}

export default App;