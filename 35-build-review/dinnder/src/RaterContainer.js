import React from 'react';
import FilterBar from './FilterBar';
import RestaurantCard from './RestaurantCard';


class RaterContainer extends React.Component {

    state = {
        onlyNY: false,
        startIndex: 0,
        restaurants: []
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
        console.log('inside the toggle')
        this.setState({ onlyNY: !this.state.onlyNY })
    }
    
    renderCards = () => {
        let restaurantsToRender = this.state.restaurants;
        if (this.state.onlyNY){
            restaurantsToRender = restaurantsToRender.filter(rest => rest.state === 'NY')
        }
        return restaurantsToRender
            .slice(this.state.startIndex, this.state.startIndex + 5)
            .map((restObj, index) => <RestaurantCard key={index} {...restObj} />)
    }

    renderPageNumbers = () => {
        const lastPage = Math.ceil(this.state.restaurants.length / 5)

        let pagesArray = []
        for(let i = 0; i < lastPage ; i++){
            // 1 ==> 0
            // 2 ===> 5
            // 3 ==> 10
            pagesArray.push(<span onClick={() => this.setStartIndex(i * 5)} key={i}>{i + 1}</span>)
        }
        return pagesArray
    }

    render(){
        console.log('inside rater container render',this.state)

        return (
            <div>
                <button onClick={this.handleClick}>CLICK ME!</button>
                <FilterBar toggleNY={this.toggleNY}/>
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