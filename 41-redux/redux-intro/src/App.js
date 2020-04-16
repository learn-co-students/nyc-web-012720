import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import * as actions from './actionCreators'

//  function random_rgba() {
//   var o = Math.round, r = Math.random, s = 255;
//   return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
// }

class App extends React.Component {

  // state = {
  //   likes: 0,
  //   text: '',
  //   darkMode: false,
  //   thangs: []
  // }

  // dispatch = (type, payload) => {
  //   // 2. actually setting the state 
  //   let newState = this.reducer(type, payload)
  //   this.setState(newState)
  // }

  // reducer = (type, payload) => {
  //   // 1. calculating the new state
  //   switch(type){
  //     case 'LIKE':
  //       return { ...this.state, likes: this.state.likes + 1 };
  //     case 'DISLIKE':
  //       return {...this.state, likes: this.state.likes - 1 }
  //     case 'TOGGLE_DARK':
  //       return {...this.state, darkMode: !this.state.darkMode }
  //     case 'HANDLE_CHANGE':
  //       return {...this.state, [payload.target.name]: payload.target.value }
  //     case 'ADD_TEXT':
  //       return {...this.state, 
  //         text: '',
  //         thangs: [this.state.text, ...this.state.thangs]
  //       }
  //     default:
  //       return {...this.state};
  //   }
  // }

  // we only need one function now!! 
  // like = () => {  }
  // dislike = () => {  }
  // toggle = () => { }
  // handleChange = (event) => {   }
  // addText = () => {}

  render(){
    console.log('app props:::::', this.props)
    return (
      <div className={"App" + (this.props.darkMode ? " dark" : "")}>
        <button onClick={this.props.toggleDark}>Dark mode</button>
        <h3>{this.props.text}</h3>
        <input 
          name="text" 
          value={this.props.text} 
          onChange={event => this.props.handleChange(event.target.value)}/>
        <button onClick={this.props.addText}>Add!</button>

        <h4>{this.props.likes} likes</h4>
        <button onClick={this.props.dislike}>
          Dislike <span role="img" aria-label="thumbs down">👎</span>
        </button>
        <button onClick={this.props.like}>
          Like<span role="img" aria-label="thumbs up">👍</span>
        </button>
        {
          this.props.thangs.map((thang, index) => <h1 key={index} >{thang}</h1>)
        }
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  // console.log(state)
  return {
    likes: state.likes,
    darkMode: state.darkMode,
    thangs: state.thangs,
    text: state.text
  }
}

const mapDispatchToProps = (dispatch) => {
  // console.log(arg2)
  return {
    like: () => { dispatch(actions.likeCreator()) },
    dislike: () => { dispatch(actions.dislikeCreator()) },
    toggleDark: () => { dispatch(actions.toggleCreator()) },
    addText: () => { dispatch(actions.addTextCreator()) },
    handleChange: (value) => { dispatch(actions.handleChangeCreator(value)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
