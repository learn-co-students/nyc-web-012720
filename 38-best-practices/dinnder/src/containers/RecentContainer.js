import React from 'react';
import RecentCard from '../components/RecentCard';
import { FlexContHoriz } from '../styled';

const RecentContainer = props => {
    return (
        <div>
            <p>Recently Liked Restaurants... soon</p>
            <FlexContHoriz>
                {['Mojo', 'Toothless', 'Hedwig', 'Stuart'].map((item, index) => <RecentCard key={index} text={item}/>)}
            </FlexContHoriz>
            <hr />
        </div>
    )
}

export default RecentContainer;