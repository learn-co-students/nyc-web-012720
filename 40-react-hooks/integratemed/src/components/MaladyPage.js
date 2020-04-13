import React, { useState, useEffect } from 'react';
import { fetchMalady } from '../helpers/requests';
import {  StyledPage, ImageHider } from '../helpers/styles'

const MaladyPage = props => {
    /**
     * this replaces class component and ...
     * state = { showPhoto: false, malady: null }
     */

    // [ getter, setter ]
    let [showPhoto, setShowPhoto] = useState(false); // [this.state.showPhoto, this.setState({ showPhoto: ....? })]
    let [malady, setMalady] = useState(null);

    useEffect(() => {
        console.log('inside use effect')
        fetchMalady(props.match.params.id).then(malady => {
            setMalady(malady)
            // this.setState({ malady })
        })

    }, []) // dependency array
    // equivalent of componentDidMount ====> []

    useEffect(() => {
        console.log('inside 2nd use effect')
        if(showPhoto){
            alert('ya sure tho?')
        }
    }, [ showPhoto ])

    // parking lot ===> when do we need something in that array 

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
        <div className="right-panel" onClick={() => setShowPhoto(!showPhoto)}>
            { showPhoto 
                ? <img src={malady.image} alt={malady.name}/>
                : <ImageHider>Click to View Image</ImageHider>
            }
        </div>
    )

    return (
       malady //malady
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