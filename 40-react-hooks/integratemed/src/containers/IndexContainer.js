import React from 'react';
import { RemedyCard, MaladyCard } from '../components';
import { getMaladies, getRemedies } from '../helpers/requests';
import { CardFlxContainer } from '../helpers/styles';

class IndexContainer extends React.Component {
    // when the component mounts... figure out if its for maladies or remedies
    // fake the appropriate fetch
    // set the data to state (maladies or remedies)
    // render the right type of card
    state = {
        remedies: [],
        maladies: []
    }

    componentDidMount(){
        console.log(this.props)
        getRemedies().then(remedies => this.setState({ remedies }))
        getMaladies().then(maladies => this.setState({ maladies }))

        // if(this.props.location.pathname.includes('remedies')){
        //     // pretend this is a fetch
        //     this.setState({ remedies: remedies})
        // }
    }

    renderRemedy = () => {
        return (
            <>
                <h1>Remedies</h1>
                <CardFlxContainer>
                    {this.state.remedies.map(remedy => 
                        <RemedyCard key={remedy.id} {...remedy} />)}
                </CardFlxContainer>
            </>
        )
    }

    renderMalady = () => {
        return (
            <>
                <h1>Maladies</h1>
                <CardFlxContainer>
                    {this.state.maladies.map(malady => 
                        <MaladyCard key={malady.id} {...malady} />)}
                </CardFlxContainer>
            </>
        )
    }

    render(){
        console.log(this.state)
        let isOnRemedy = this.props.location.pathname.includes('remedies')
        let isOnMalady = this.props.location.pathname.includes('maladies')

        return (
            <div>
                {isOnRemedy && this.renderRemedy() }
                {isOnMalady && this.renderMalady() }
            </div>
        )
    }
}

export default IndexContainer;