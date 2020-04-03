import React from 'react';
import './App.css';

// import LifeCycleApp from "./lifecycle/LifeCycleApp"
import TickerContainer from "./ticker/TickerContainer"

class App extends React.Component {
  state = {
    showTicker: true
  }

  render(){
    return (
      <div className="App">  
       {/* <LifeCycleApp /> */}
       <button onClick={() => this.setState({ showTicker: false })}>STOP TICKER PERMANENTLY</button>
       {this.state.showTicker && <TickerContainer />}
      </div>
    );
  }
}

export default App;