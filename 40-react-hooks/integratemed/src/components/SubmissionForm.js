import React from 'react';
import { StyledSubmission } from '../helpers/styles';
import { getMaladies, postRemedy } from '../helpers/requests';
 
class SubmissionForm extends React.Component {
    state = {
        maladies: [],
        name: '',
        image: '',
        ingredients: '',
        instructions: '', 
        treatments: {}

    }

    componentDidMount(){
        getMaladies().then(maladies => this.setState({maladies}) )
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleMaladySelect = id => {
        let newTreaments = {...this.state.treatments}
        newTreaments[id] 
            ? delete newTreaments[id]
            : newTreaments[id] = true

        this.setState({ treatments: newTreaments })
    }

    handleSubmit = e => {
        e.preventDefault()
        const { name, image, ingredients, instructions, treatments } = this.state;
        postRemedy({name, image, instructions, ingredients, maladies: Object.keys(treatments)})
            .then(newRemedy => {
                console.log(newRemedy)
                this.setState({
                    name: '',
                    image: '',
                    ingredients: '',
                    instructions: '', 
                    treatments: {}
                })
                this.props.history.push('/remedies')
            })
    }

    render() {
        console.log(this.state)
        return (
            <StyledSubmission onSubmit={this.handleSubmit}>
                <h3>Submit a Remedy</h3>
                <label>
                    Name:
                    <input className="text-input" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                </label>
                <label>
                    Image:
                    <input className="text-input" name="image" type="text" value={this.state.image} onChange={this.handleChange} />
                </label>
                <label>
                    Ingredients:
                    <input className="text-input" name="ingredients" type="text" value={this.state.ingredients} onChange={this.handleChange} placeholder="Separate ingredients with commas as in 'hot water, lemon'"/>
                </label>
                <label>
                    Instructions:
                    <input className="text-input" name="instructions" type="text" value={this.state.instructions} onChange={this.handleChange} />
                </label>
                    {this.state.maladies.map( ({id, name}) => {
                        return (
                        <label key={id}>
                            {name}:
                            <input
                                name="treatments"
                                type="checkbox"
                                checked={this.state.treatments[id] || false}
                                onChange={() => this.handleMaladySelect(id)} />
                        </label>
                        )

                    })}
                <input id="submit-btn" type="submit" value="Submit" />
            </StyledSubmission>
        )
    }
}

export default SubmissionForm;