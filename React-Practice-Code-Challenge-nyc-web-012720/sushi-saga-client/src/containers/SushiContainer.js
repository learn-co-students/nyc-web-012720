import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    startIndex: 0
  }

  changeIndex = () => {
    let newIndex = this.state.startIndex + 4
    if(newIndex >= this.props.sushis.length){
      newIndex = 0
    }
    this.setState({ startIndex: newIndex })
    // this.setState({ startIndex: newIndex >= this.props.sushis.length ? 0 : newIndex  })
  }

  render(){
    console.log(this.state.startIndex)
    let displaySushis = this.props.sushis.slice(this.state.startIndex, this.state.startIndex + 4)

    return (
      <Fragment>
        <div className="belt">
          {
            displaySushis.map(sushi => 
              // <Sushi key={sushi.id} sushi={sushi} />)
              <Sushi key={sushi.id} {...sushi} eaten={this.props.eaten} handleEat={this.props.handleEat}/>)
          }
          <MoreButton handleClick={this.changeIndex} />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer