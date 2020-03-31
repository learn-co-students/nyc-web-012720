import React from 'react';
import { StyledFilter } from './styled';

const FilterBar = props => {
    return (
        <StyledFilter>
            <p>Only Popular</p>
            <p>Only NYC</p>
            <p>By Price</p>
            <p>By Category</p>
        </StyledFilter>
    )
}

export default FilterBar;