import React from 'react';
import { StyledFilter } from './styled';

const FilterBar = props => {
    return (
        <StyledFilter>
            <p onClick={props.toggleNY}>Only NYC</p>
            <label>
                State: 
                <select value={props.filterState} onChange={props.handleFilterChoice} name="filterState">
                    <option value="">All</option>
                    <option value="CA">CA</option>
                    <option value="NY">NY</option>
                    <option value="AZ">AZ</option>
                    <option value="PA">PA</option>
                    <option value="ON">ON</option>
                </select>
            </label>
            <label>
                Stars: 
                <select>
                    <option value="0">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5</option>
                </select>
            </label>
            <label>
                Search by Name: <input onChange={props.handleFilterChoice} value={props.searchTerm} type="text" name="searchTerm" />
            </label>
        </StyledFilter>
    )
}

export default FilterBar;