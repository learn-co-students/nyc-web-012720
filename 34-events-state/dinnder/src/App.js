import React from 'react';
import './App.css';
import Navbar from './Navbar';
import MainContainer from './MainContainer';

// named export
// export const App = props => {

const App = props => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>while(true) learn() noooo refresh</h1>
        <Navbar />
        <MainContainer />
      </header>
    </div>
  );
}

// default export syntax
export default App;
