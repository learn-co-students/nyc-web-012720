import React, { useState, useEffect } from 'react';
import SushiContainer from './containers/SushiContainer';
// import SushiContainer from './containers/SushiContainerHook';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

const App = () =>  {
  
  let [sushis, setSushis] = useState([])
  let [eatenSushis, setEatenSushis] = useState([])
  let [budget, setBudget] = useState(105)
  
  // componentDidMount(){
  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      setSushis(data)
    })
    
    // let myInterval = setInterval(() => console.log('sup homes'), 1000)

    // const cleanup = () => {
    //   clearInterval(myInterval)
    // }

    // return cleanup
  }, [])

  const eatSushi = (id, price, eaten) => {
    if(price <= budget && !eaten){ 
      let newSushis = sushis.map(sushi => { 
        if(sushi.id === id){ 
          sushi.eaten = true
        }
        return sushi 
      })

      setSushis(newSushis);
      setEatenSushis([...eatenSushis, id])
      setBudget(budget - price)
    
      // this.setState({ 
      //   sushis: newSushis,
      //   eatenSushis: [...eatenSushis, id],
      //   budget: budget - price
      // })
    } else {
      window.open("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSklpwBW2RjOugiPzZ1iu1tED80vDAO8BoMwhwb1VdBD7WQ7nh0")
    }
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} eatSushi={eatSushi} />
      <Table eatenSushis={eatenSushis} budget={budget} />
    </div>
  );

}

export default App;