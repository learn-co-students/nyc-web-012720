import React, { Fragment, useState, useEffect } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = props => {
  
  let [ startIndex, setStartIndex ] = useState(0);
  let [ liked, setLiked ] = useState(false)

  const updateIndex = () => {
    setStartIndex(startIndex + 4 )
  }

  useEffect(() => {
    // check if startIndex is too far... if it is set it back to zero
    console.log('inside index use effect')
    if (startIndex >= props.sushis.length){
      setStartIndex(0)
    }
  }, [startIndex]) // due to dependency array, only runs when startIndex changes (not likes)


  let displayedSushi = props.sushis.slice(startIndex, startIndex + 4) 

  console.log('startIndex: ', startIndex, ' &&&&&&& liked: ', liked)
  
  return (
    <Fragment>
      <div className="belt" onClick={() => setLiked(!liked)}>
        {displayedSushi.map(sushi => <Sushi key={sushi.id} {...sushi} eatSushi={props.eatSushi}/>)}
        <MoreButton updateIndex={updateIndex}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer