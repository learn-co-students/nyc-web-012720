import React from 'react';
import { StyledCard } from './styled';
const restaurantImgs = [
    "https://www.singleplatform.com/wp-content/uploads/2018/12/5-Tips-for-Improving-Restaurant-Ambiance.jpg",
    "https://cdn.vox-cdn.com/thumbor/yEGoFOD_IxCDHaO3KLtXl4DP5cw=/0x0:960x720/1200x800/filters:focal(404x284:556x436)/cdn.vox-cdn.com/uploads/chorus_image/image/66518444/49756043_2278118339100820_6613754327326523392_o.0.jpg",
    "https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    "https://stmedia.stimg.co/uptown-minneapolis-restaurant-libertine-closed.jpg?w=800",
    "https://image.cnbcfm.com/api/v1/image/106446352-1584379579640gettyimages-1207362592.jpeg?v=1584379659&w=678&h=381",
    "https://cdn.vox-cdn.com/thumbor/r6GaFXzgvkbJsq5ioEyxXtqQYlM=/0x0:2000x1335/1200x800/filters:focal(840x508:1160x828)/cdn.vox-cdn.com/uploads/chorus_image/image/66533246/2019_10_07_Pilot_restaurant_003.0.jpg",
    "https://wamu.org/wp-content/uploads/2020/03/200316_DC_empty_restaurants_Turner_02-1500x1000.jpg",
    "https://media.timeout.com/images/105239239/image.jpg"
]

const RestaurantCard = props => {
    // console.log('card props: ', props)
    return (
        <StyledCard>
           <span role="img" aria-label="no">🚫</span>
           <div className="restaurant-info">
                <div>{props.name}</div>
                <img alt="props.name" src={restaurantImgs[props.business_id % restaurantImgs.length]}/>
                <div>
                    <p>{props.address}</p>
                    <p>{props.city}, {props.state} {props.postal_code}</p>
                </div>
           </div>
           <span role="img" aria-label="yes">❤️</span>
        </StyledCard>
    )
}

export default RestaurantCard;

