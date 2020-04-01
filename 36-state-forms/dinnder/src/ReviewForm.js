import React from 'react';
import { StyledReview } from './styled'

const initialState = {
    review: "",
    penName: ""
}

class ReviewForm extends React.Component {
    state = initialState

    handleChange = (event) => {
        // console.log('name: ', event.target.name, ' and value: ', event.target.value)
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        // 1. TODO LATER send a fetch to POST my new review
        // console.log(' handling submit ', this.state)
        // 2. update my frontend to reflect the new review ==> pessimistically 
        this.props.handleNewReview(this.props.restId, this.state)
        // 3. clear out the form 
        // OLD MOD3 WAYZ ===> event.target.reset()
        this.setState(initialState)
    }

    render() {
        // console.log('lets see state: ', this.state)
        return (
            <StyledReview onSubmit={this.handleSubmit}> {/* form tag equivalent */}
               <label>
                    Review: <input onChange={this.handleChange} type="text" name="review" value={this.state.review}/>
                </label>
                <label>
                    Pen Name: <input onChange={this.handleChange} type="text" name="penName" value={this.state.penName}/>
                </label>
                <label>
                    Stars: 
                    <select>
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