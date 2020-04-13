import React from 'react';
import { fetchRemedy } from '../helpers/requests';
import {  StyledPage, ImageHider } from '../helpers/styles'


const RemedyPage = props => {
    let remedy, showPhoto;
    // stateful things ---- 

    //remedy object after fetching from the backend 
    // fetchRemedy(props.match.params.id).then(remedy => {

    // showPhoto
    // toggle to hide or show photo, initially set to false

    const displayInfo = () => (
        <div className="left-panel">

            <h3>Ingredients</h3>
            <ul>
                {remedy.ingredients.split(', ').map((ingr, ind) => <li key={ind}>{ingr}</li>)}                       
            </ul>
            <h3> Instructions </h3>
            <p>{remedy.instructions}</p>
            <h3>Maladies Treated</h3>
            <ul>
                {remedy.maladies.map(({id, name}) => <li className="clickable" key={id}>{name}</li>)}                       
            </ul>
        </div>
    )

    const displayImage = () => (
        <div className="right-panel">
            {remedy && showPhoto 
                ? <img src={remedy.image} alt={remedy.name}/>
                : <ImageHider>Click to View Image</ImageHider>
            }
        </div>
    )

    return (
       remedy
        ? (
            <StyledPage>
                <h1>{remedy.name}</h1>
                <div>
                    {displayInfo()}
                    {displayImage()}
                </div>
            </StyledPage>
        ) : (
            <div>Loading</div>
        )
    )
}

export default RemedyPage;