import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eaten: [],
    budget: 105,
    amount: ''
  }

  /**
   * Eating strategy
   * keep an array of IDs of eaten sushis in App state
   * when a sushi is eaten, add its ID to the array
   * pass the eaten array to table so it can render all the empty plates
   * when a sushi is rendered, if its ID is in the eaten array, do not show an image 
   */

  componentDidMount(){
    fetch(API).then(res => res.json()).then(sushis => this.setState({ sushis }))
  }

  handleEat = (id) => {
    const targetSushi = this.state.sushis.find(sushi => sushi.id === id)

    let newSushis = this.state.sushis.map(sushi => {
      if (sushi.id === id){
        return {...sushi, isEaten: true}
      } else {
        return sushi
      }
    })

    if(!this.state.eaten.includes(id) && targetSushi.price <= this.state.budget){
      this.setState({ 
        eaten: [...this.state.eaten, id],
        budget: this.state.budget - targetSushi.price,
        sushis: newSushis
      })
    } else {
      alert('ya broke! so sad, too bad')
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    // update state as the user updates the field
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      budget: this.state.budget + parseInt(this.state.amount), // add the amount to budget in state
      amount: ''  // clear the form
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="app">
         <form onSubmit={this.handleSubmit}>
          <label>
            Add Amount:
            <input type="text" name="amount" value={this.state.amount} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <SushiContainer 
          sushis={this.state.sushis} 
          eaten={this.state.eaten}
          handleEat={this.handleEat}/>
        <Table eaten={this.state.eaten} budget={this.state.budget} />
      </div>
    );
  }
}

export default App;