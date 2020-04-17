import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={index} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.budget } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {renderPlates(props.eatenSushis)}
        </div>
      </div>
    </Fragment>
  )
}

// map state to props 
// when you need values from reducer state to be displayed in your app 
const msp = state => {
  return {
    budget: state.budget,
    eatenSushis: state.eatenSushis
  }
}

export default connect(msp)(Table);
// need just mdp??
// connect(() => {}, mdp)