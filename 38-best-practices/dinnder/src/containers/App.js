import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import MainContainer from './MainContainer';

// named export
// export const App = props => {

const App = props => {
  return (
    <div className="App">
      <header className="App-header">
        
        <Navbar />
        <MainContainer />
      </header>
    </div>
  );
}

// default export syntax
export default App;
