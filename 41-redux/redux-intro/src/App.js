import React from 'react';
import './App.css';

//  function random_rgba() {
//   var o = Math.round, r = Math.random, s = 255;
//   return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
// }

class App extends React.Component {

  state = {
    likes: 0,
    text: '',
    darkMode: false,
    thangs: []
  }

  dispatch = (type, payload) => {
    // 2. actually setting the state 
    let newState = this.reducer(type, payload)
    this.setState(newState)
  }

  reducer = (type, payload) => {
    // 1. calculating the new state
    switch(type){
      case 'LIKE':
        return { ...this.state, likes: this.state.likes + 1 };
      case 'DISLIKE':
        return {...this.state, likes: this.state.likes - 1 }
      case 'TOGGLE_DARK':
        return {...this.state, darkMode: !this.state.darkMode }
      case 'HANDLE_CHANGE':
        return {...this.state, [payload.target.name]: payload.target.value }
      case 'ADD_TEXT':
        return {...this.state, 
          text: '',
          thangs: [this.state.text, ...this.state.thangs]
        }
      default:
        return {...this.state};
    }
  }

  // we only need one function now!! 
  // like = () => {  }
  // dislike = () => {  }
  // toggle = () => { }
  // handleChange = (event) => {   }
  // addText = () => {}

  render(){
    return (
      <div className={"App" + (this.state.darkMode ? " dark" : "")}>
        <button onClick={() => this.dispatch('TOGGLE_DARK')}>Dark mode</button>
        <h3>{this.state.text}</h3>
        <input 
          name="text" 
          value={this.state.text} 
          onChange={event => this.dispatch('HANDLE_CHANGE', event)}/>
        <button onClick={() => this.dispatch('ADD_TEXT')}>Add!</button>

        <h4>{this.state.likes} likes</h4>
        <button onClick={() => this.dispatch('DISLIKE')}>
          Dislike <span role="img" aria-label="thumbs down">👎</span>
        </button>
        <button onClick={() => this.dispatch('LIKE')}>
          Like<span role="img" aria-label="thumbs up">👍</span>
        </button>
        {
          this.state.thangs.map((thang, index) => <h1 key={index} >{thang}</h1>)
        }
      </div>
    );
  }
}


export default App;
