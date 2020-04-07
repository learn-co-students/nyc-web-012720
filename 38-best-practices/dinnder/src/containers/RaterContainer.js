import React from 'react';
import FilterBar from '../components/FilterBar';
import RestaurantCard from '../components/RestaurantCard';


class RaterContainer extends React.Component {

    state = {
        onlyNY: false,
        startIndex: 0,
        restaurants: [],
        searchTerm: "",
        filterState: ""
    } 

    componentDidMount() {
        fetch('http://localhost:6001/restaurants?_embed=reviews')
        .then(res => res.json())
        .then(restaurants => {
            this.setState({ restaurants })
        })
    }

    componentDidUpdate(prevProps, prevState){
        // totally missing some logic here like.... search term?
        if(prevState.filterState !== this.state.filterState){
            this.setState({ startIndex: 0 })
        }
    }

    handleFilterChoice = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleNewReview = newReview => {

        let newRestaurants = this.state.restaurants.map(rest => {
            if (rest.id === newReview.restaurantId){ 
                let newTargetRest = {...rest} 
                newTargetRest.reviews = [...newTargetRest.reviews, newReview]
                return newTargetRest
            } else {
                return rest 
            }
        })
        this.setState({ restaurants: newRestaurants })
    }

    setStartIndex = (newIndex) => {
        if( newIndex >= 0 && newIndex < this.state.restaurants.length){
            this.setState({ startIndex: newIndex })
        }
    }

    filterSortHelper = () => {
        let restaurantsToRender = this.state.restaurants;
        if (this.state.onlyNY){
            restaurantsToRender = restaurantsToRender.filter(rest => rest.state === 'NY')
        }
        return restaurantsToRender
            .filter(rest => rest.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) )
            .filter(rest => this.state.filterState.length ? rest.state === this.state.filterState : true)
    }
    
    renderCards = (filteredCards) => {
        return filteredCards
            .slice(this.state.startIndex, this.state.startIndex + 5)
            .map((restObj, index) => <RestaurantCard key={index} {...restObj} handleNewReview={this.handleNewReview}/>)
    }

    renderPageNumbers = (filteredCards) => {
        const lastPage = Math.ceil(filteredCards.length / 5)

        let pagesArray = []
        for(let i = 0; i < lastPage ; i++){
            pagesArray.push(<span onClick={() => this.setStartIndex(i * 5)} key={i}>{i + 1}</span>)
        }
        return pagesArray
    }

    render(){
        let filteredCards = this.filterSortHelper()

        return (
            <div>
                <FilterBar 
                    searchTerm={this.state.searchTerm} 
                    filterState={this.state.filterState}
                    handleFilterChoice={this.handleFilterChoice}
                />
                {this.renderCards(filteredCards)}
                {this.renderPageNumbers(filteredCards)}
                <div>
                    { this.state.startIndex !== 0 && <div onClick={() => this.setStartIndex(this.state.startIndex - 5)}>Prev</div> }
                    <div onClick={() => this.setStartIndex(this.state.startIndex + 5)}>Next</div>
                </div>
            </div>
        )
    }
}

export default RaterContainer;