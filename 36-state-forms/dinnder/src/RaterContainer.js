import React from 'react';
import FilterBar from './FilterBar';
import RestaurantCard from './RestaurantCard';


class RaterContainer extends React.Component {

    state = {
        onlyNY: false,
        startIndex: 0,
        restaurants: [],
        searchTerm: "",
        filterState: ""
    }

    handleFilterChoice = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    // handleStateSelect = (event) => {
    //     console.log(event.target)
    //     this.setState({ filterState: event.target.value })
    // }

    // handleSearchChange = (event) => {
    //     this.setState({ searchTerm: event.target.value })
    // }

    // need to update the restaurant inside of RaterContainer.state.restaurants 
    // some method defined in RaterContainer to update its state 
    // that method needs to update ONLY the target restaurant by updating JUST its reviews array

    handleNewReview = (restaurantId, newReview) => {
        // be able to find the target restaurant
        // map over all of the old ones, and if I see the target one, push the newReview into its array

        // TODO
        // finding the target restaurant index, making a copy of it, doing the updates, and then setting the index to the new version
        // this.state.restaurants.findIndex(rest => rest.id === restaurantId)

        // console.log('inside rater container', restaurantId, newReview)

        let newRestaurants = this.state.restaurants.map(rest => {
            if (rest.business_id === restaurantId){ // if we found the target restaurant
                let newTargetRest = {...rest} // create a copy so you don't mutate the original
                newTargetRest.reviews = [...newTargetRest.reviews, newReview] // use the spread operator to copy the old reviews and add the new one
                return newTargetRest // return the updated restaurant
            } else {
                return rest // if its not the target, just return the original
            }
        })
        // console.log('new restaurants', newRestaurants)
        this.setState({ restaurants: newRestaurants })
    }

    setStartIndex = (newIndex) => {
        if( newIndex >= 0 && newIndex < this.state.restaurants.length){
            this.setState({ startIndex: newIndex })
        }
    }

    handleClick = () => {
        // (kind of...) fake the fetch!
        fetch('http://localhost:6001/restaurants')
        .then(res => res.json())
        .then(restaurants => {
            this.setState({ restaurants })
        })
    }

    toggleNY = () => {
        this.setState({ onlyNY: !this.state.onlyNY })
    }
    
    renderCards = () => {
        let restaurantsToRender = this.state.restaurants;
        if (this.state.onlyNY){
            restaurantsToRender = restaurantsToRender.filter(rest => rest.state === 'NY')
        }
        return restaurantsToRender
            .filter(rest => 
                rest.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            )
            .filter(rest => this.state.filterState.length ? rest.state === this.state.filterState : true)
            .slice(this.state.startIndex, this.state.startIndex + 5)
            .map((restObj, index) => <RestaurantCard key={index} {...restObj} handleNewReview={this.handleNewReview}/>)
    }

    renderPageNumbers = () => {
        const lastPage = Math.ceil(this.state.restaurants.length / 5)

        let pagesArray = []
        for(let i = 0; i < lastPage ; i++){
            pagesArray.push(<span onClick={() => this.setStartIndex(i * 5)} key={i}>{i + 1}</span>)
        }
        return pagesArray
    }

    render(){
        console.log(this.state)
        return (
            <div>
                <button onClick={this.handleClick}>CLICK ME!</button>
                <FilterBar 
                    toggleNY={this.toggleNY} 
                    searchTerm={this.state.searchTerm} 
                    filterState={this.state.filterState}
                    handleFilterChoice={this.handleFilterChoice}
                />
                {this.renderCards()}
                {this.renderPageNumbers()}
                <div>
                    { this.state.startIndex !== 0 && <div onClick={() => this.setStartIndex(this.state.startIndex - 5)}>Prev</div> }
                    <div onClick={() => this.setStartIndex(this.state.startIndex + 5)}>Next</div>
                </div>
            </div>
        )
    }
}

export default RaterContainer;