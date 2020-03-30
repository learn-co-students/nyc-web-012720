import React from 'react';
import styled from 'styled-components'

const RestaurantCard = props => {
    console.log('card props: ', props)
    return (
        <StyledCard>
           <span role="img" aria-label="no">🚫</span>
           <div className="restaurant-info">
                <div>{props.name}</div>
                <div>{props.address}</div>
           </div>
           <span role="img" aria-label="yes">❤️</span>
        </StyledCard>
    )
}

export default RestaurantCard;

const StyledCard = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px;
    width: 100vw;
    justify-content: center;
    background-color: pink
`