import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  render(){  
    let displayedSushi = this.props.sushis.slice(this.props.startIndex, this.props.startIndex + 4) // (startIndex, exclusive endIndex) LOOK AT THE DOCS
   
    return (
      <Fragment>
        <div className="belt">
          {displayedSushi.map(sushi => <Sushi key={sushi.id} {...sushi}/>)}
          <MoreButton />
        </div>
      </Fragment>
    )
  }
}

const msp = state => {
  return {
    sushis: state.sushis,
    startIndex: state.startIndex
  }
}

export default connect(msp)(SushiContainer);