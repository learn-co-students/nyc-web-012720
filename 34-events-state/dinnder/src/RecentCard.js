import React from 'react';
import { RecentCardStyle } from './styled'

const RecentCard = props => {
    return (
        <RecentCardStyle>
            <p>Sample RecentCard</p>
            <div>{props.text}</div>
        </RecentCardStyle>
    )
}

export default RecentCard;