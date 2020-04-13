import React from 'react';
import { useHistory } from 'react-router-dom';
import { StyledCard } from '../helpers/styles';


const MaladyCard = props => {
    const { id, name } = props;
    const history = useHistory();

    return (
        <StyledCard onClick={() => history.push(`/maladies/${id}`)} >
            <h3>{name}</h3>
        </StyledCard>
    )
}

export default MaladyCard;