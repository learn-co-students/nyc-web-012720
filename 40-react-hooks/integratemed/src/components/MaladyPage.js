import React from 'react';
import { fetchMalady } from '../helpers/requests';
import {  StyledPage, ImageHider } from '../helpers/styles'

const MaladyPage = props => {
    let malady, showPhoto;
    // stateful things ---- 

    //malady object after fetching from the backend 
    // fetchMalady(props.match.params.id).then(remedy => {

    // showPhoto
    // toggle to hide or show photo, initially set to false

    const displayInfo = () => (
        <div className="left-panel">

            <h3>Description</h3>
            <p>Need to add a migration and re-seed for descriptions</p>
            <h3>Applicable Remedies</h3>
            <ul>
                {malady.remedies.map(({id, name}) => <li className="clickable" key={id}>{name}</li>)}                       
            </ul>
        </div>
    )

    const displayImage = () => (
        <div className="right-panel">
            {malady && showPhoto 
                ? <img src={malady.image} alt={malady.name}/>
                : <ImageHider>Click to View Image</ImageHider>
            }
        </div>
    )

    return (
       malady
        ? (
            <StyledPage>
                <h1>{malady.name}</h1>
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

export default MaladyPage;