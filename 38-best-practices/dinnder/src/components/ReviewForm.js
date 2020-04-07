import React from 'react';
import { StyledReview } from '../styled'

const initialState = {
    content: "",
    penName: "",
    stars: 1
}

class ReviewForm extends React.Component {
    state = initialState

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.name === 'stars' 
            ? parseInt(event.target.value, 10) 
            : event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        fetch('http://localhost:6001/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({...this.state, restaurantId: this.props.restId})
        })
        .then(res => res.json())
        .then(newReview => {
            this.props.handleNewReview(newReview)
        })
        this.setState(initialState)
    }

    render() {
        return (
            <StyledReview onSubmit={this.handleSubmit}> 
               <label>
                    Review: <input onChange={this.handleChange} type="text" name="content" value={this.state.review}/>
                </label>
                <label>
                    Pen Name: <input onChange={this.handleChange} type="text" name="penName" value={this.state.penName}/>
                </label>
                <label>
                    Stars: 
                    <select value={this.state.stars} name="stars" onChange={this.handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </StyledReview>
        )
    }

}

export default ReviewForm;