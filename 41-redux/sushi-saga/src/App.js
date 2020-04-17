import React, { Component } from 'react';
import { connect } from 'react-redux';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import { sushis  } from './sushis'; 
import { fetchSushisCreator } from './reducer'

// Endpoint!

class App extends Component {

  state = {
    moneyInput: ''
  }

  componentDidMount(){
    // fetch(API)
    // .then(res => res.json())
    // .then(sushis => {
    //   this.setState({ sushis })
    // })
    this.props.fetchSushis()
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.increaseBudget(parseInt(this.state.moneyInput, 10))
    this.setState({ 
      // budget: this.state.budget + parseInt(this.state.moneyInput, 10),
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
        <SushiContainer />
        <Table />
      </div>
    );
  }
}

const mdp = dispatch => {
  return {
    fetchSushis: () => dispatch(fetchSushisCreator()),
    increaseBudget: amount => dispatch({ type: 'INCREASE_BUDGET', payload: { amount }})
  }
}

export default connect(null, mdp)(App);