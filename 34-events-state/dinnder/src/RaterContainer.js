import React from 'react';
import FilterBar from './FilterBar';
import RestaurantCard from './RestaurantCard';
import { restaurants } from './db'; // eventually we need to fetch
// we'll get there when we get to LIFECYCLE


// class components!
// if you need state ( as opposed to props ) ===> TOMORROW TOMORROW 
// if you need lifecycle methods  =====> FRIYAY

class RaterContainer extends React.Component {
    
    renderCards = () => {
        console.log('inside the func')
        return restaurants.map((restObj, index) => <RestaurantCard key={index} {...restObj} />)
    }

    render(){
        console.log(restaurants)

        return (
            <div>
                <div>RaterContainer >> Count: </div>
                <button>CLICK ME!</button>
                <FilterBar />
                {this.renderCards()}
                {/* {[<div>Please</div>,<div>Excuse</div>, <div>My</div>, <div>Dear</div>, <div>Aunt</div>, <div>Sally!!</div>]} */}
                {/* KEYS ===> ANYTIME  you're mapping, allow react's optimizations to work and will fix some minor bugs */}
                {/* mapping over an array of objects to create an array of components */}
            </div>
        )
    }


    /**
     * (restObj, index) => { return 'explicitly'}
     * (restObj, index) => 'implicitly'
     */

}

export default RaterContainer;