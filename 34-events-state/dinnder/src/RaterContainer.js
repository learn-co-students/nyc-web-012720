import React from 'react';
import FilterBar from './FilterBar';
import RestaurantCard from './RestaurantCard';
import { restaurants } from './db'; // eventually we need to fetch
// we'll get there when we get to LIFECYCLE


class RaterContainer extends React.Component {

    state = {
        count: 0,
        onlyNY: false,
        startIndex: 0,
        restaurants: restaurants
    }

    increaseIndex = () => {
        if(restaurants.length > this.state.startIndex + 5){
            this.setState({ startIndex: this.state.startIndex + 5})
        }
    }

    decreaseIndex = () => {
        if(this.state.startIndex !== 0){
            this.setState({ startIndex: this.state.startIndex - 5 })
        }
    }

    toggleNY = () => {
        console.log('inside the toggle')
        this.setState({ onlyNY: !this.state.onlyNY })
    }
    
    renderCards = () => {
        let restaurantsToRender = restaurants;
        if (this.state.onlyNY){
            restaurantsToRender = restaurantsToRender.filter(rest => rest.state === 'NY')
        }
        return restaurantsToRender
            .slice(this.state.startIndex, this.state.startIndex + 5)
            .map((restObj, index) => <RestaurantCard key={index} {...restObj} />)
    }

    handleClick = (event) => {
        // no no no NO NO NO NONO 
        // this.state.count = this.state.count + 1; 

        // YAAAAAAAS
        this.setState({ count: this.state.count + 1 }, () => { console.log('after', this.state) })
        
        // functional setState notation NOT REQUIRED AT THIS LEVEL
        // this.setState(prevState => { return {count: prevState.count + 1}})
        

        // asynchronicity of events
        // 1. persist
        // event.persist()
        // 2. save info into variables
        // const evtType = event.type 
    }

    render(){
        console.log('inside rater container render',this.state)

        return (
            <div>
                <div>RaterContainer >> Count: {this.state.count}</div>
                <button onClick={this.handleClick}>CLICK ME!</button>
                <FilterBar toggleNY={this.toggleNY}/>
                {this.renderCards()}
                <div>
                    { this.state.startIndex !== 0 && <div onClick={this.decreaseIndex}>Prev</div> }
                    {/* this.state.startIndex !== 0 ?  <div>Prev</div> : null */}
                    <div onClick={this.increaseIndex}>Next</div>
                </div>
            </div>
        )
    }
}



const returnsAnObj = () => {
    return {name: 'Mojo', species: 'cat'}
}

const implicitReturnObj = () => ({name: 'Mojo', species: 'cat'})

export default RaterContainer;



    // constructor notation
    // constructor(){
    //     super();

    //     this.state = {
    //         count: 0
    //     }
    //     this.renderCards = this.renderCards.bind(this)

    // }