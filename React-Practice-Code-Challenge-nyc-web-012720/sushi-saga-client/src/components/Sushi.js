import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.handleEat(props.id)}>
        { 
        //  props.eaten.includes(props.id) ?
          props.isEaten ?
            null
          :
            // <img src={props.sushi.img_url } width="100%" />
            <img src={props.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {/* {props.sushi.name} - ${props.sushi.price} */}
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi