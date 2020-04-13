import React from 'react';
import { useHistory } from 'react-router-dom';
import { StyledCard } from '../helpers/styles';

const RemedyCard = props => {
    const { id, name, ingredients } = props;
    const history = useHistory();

    return (
        <StyledCard onClick={() => history.push(`/remedies/${id}`)} >
            <h3>{name}</h3>
            <h5>Ingredients:</h5>
            <ul>
                {ingredients.split(', ').map((ingr, ind) => <li key={ind}>{ingr}</li>)}
            </ul>
        </StyledCard>
    )
}

export default RemedyCard;