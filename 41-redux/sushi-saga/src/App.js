import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
//import sushis from './sushis'; 

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eatenSushis: [],
    budget: 105,
    moneyInput: ''
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      this.setState({ sushis })
    })
  }

  eatSushi = (id, price, eaten ) => {
    if(price <= this.state.budget && !eaten){  
      let newSushis = this.state.sushis.map(sushi => {  
        if(sushi.id === id){  
          sushi.eaten = true  
        }
        return sushi  
      })
      this.setState({ 
        sushis: newSushis,
        eatenSushis: [...this.state.eatenSushis, id],
        budget: this.state.budget - price
      })
    } else {
      window.open("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSklpwBW2RjOugiPzZ1iu1tED80vDAO8BoMwhwb1VdBD7WQ7nh0")
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ 
      budget: this.state.budget + parseInt(this.state.moneyInput, 10),
      moneyInput: ''
    })
  }

  render() {
    return (
      <div className="app">
        <form onSubmit={this.handleSubmit}>
          <label>
            Amount to Deposit:
            <input value={this.state.moneyInput} placeholder="amount" name="moneyInput" onChange={this.handleChange}/>
            <input type="submit" />
          </label>
        </form>
        <SushiContainer sushis={this.state.sushis} eatSushi={this.eatSushi} />
        <Table eatenSushis={this.state.eatenSushis} budget={this.state.budget} />
      </div>
    );
  }
}

export default App;