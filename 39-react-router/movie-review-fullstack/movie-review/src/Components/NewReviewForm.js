import React from 'react';
import { API_BASE, INITIAL_REVIEW_STATE } from '../constants';

class NewReviewForm extends React.Component{
  state = INITIAL_REVIEW_STATE

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${API_BASE}/movies/${this.props.movieId}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(response => {
      if (response.errors){
        alert(response.errors)
      } else {
        this.setState({...INITIAL_REVIEW_STATE}, this.props.toggleNewReviewForm)

        // we could have this pessimistically add the review to the parent component but... I'm lazy
      }
    })
  }


  render(){
    return (
      <div className="new-review-form">
        <form className="review-form" onSubmit={this.handleSubmit}>
          <input name="content" value={this.state.content} onChange={this.handleChange} placeholder="Review Content" />
          <select value={this.state.stars} name="stars" onChange={this.handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default NewReviewForm;