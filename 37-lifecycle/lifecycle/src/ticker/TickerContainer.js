import React from 'react'
import Ticker from './Ticker'

class TickerContainer extends React.Component {

  /**   WHICH DO WE NEED?
   * 
   * componentDidMount
   * 
   * componentDidUpdate
   * 
   * componentWillUnMount
   * 
   * noneOfTheAbove!
   * 
   */

   // 1. Upon app load, random # every second 1- 100
   // 2. Stop/start button to clear/start interval
   // 3. Red/Green depending on if number is higher or lower than previous

  state = {
    number: 0,
    color: 'white',
    myInterval: null
  }
  
  componentDidMount(){
    // console.log('in the mount my trusty stead')
    this.createIntervalHelper()
    // fetch!!!!
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.number > this.state.number){
      this.setState({ color: 'red '})
    } else if(prevState.number < this.state.number) {
      this.setState({ color: 'green' })
    }
    // third case: prevState.number === this.state.number 
    // ==> does not trigger rerender or componentDidUpdate
    // so no infinite loop!
  }

  componentWillUnmount(){
    // CLEAN UP CLEAN UP 
    // closing out subscriptions, clear intervals
    if(this.state.myInterval){
      clearInterval(this.state.myInterval)
    }
  }

  createIntervalHelper = () => {
    const myInterval = setInterval(() => {
      console.log('intervallinnngggg')
      this.setState({ number: Math.ceil(Math.random() * 100)})
    }, 1000)
    this.setState({ myInterval })
  }

  handleClick = () => {
    if(this.state.myInterval){
      clearInterval(this.state.myInterval)
      this.setState({ myInterval: null })
    } else {
      this.createIntervalHelper()
    }
  }

  render(){
    return (
      <div className="box" style={{backgroundColor: this.state.color}}>
        <button onClick={this.handleClick}>Stop/Start Ticker</button>
        <Ticker number={this.state.number}/>
      </div>
    );
  }
}



export default TickerContainer 