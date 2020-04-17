import React from 'react'
import { connect } from 'react-redux'

const MoreButton = (props) => {
    return <button onClick={props.updateIndex}>
            More sushi!
          </button>
}

// map dispatch to props
// when you a component to be able to invoke some behavior to change your store 
const mdp = dispatch => {
  return {
    updateIndex: () => dispatch({type: 'UPDATE_INDEX'})
  }
}

export default connect(null, mdp)(MoreButton)