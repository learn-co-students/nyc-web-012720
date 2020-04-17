import { sushis } from './sushis';
const API = "http://localhost:3000/sushis"


const initialState = {
    sushis: [],
    eatenSushis: [],
    budget: 105,
    startIndex: 0
}

/** REGULAR ACTION CREATOR */
export const increaseBudgetCreator = (amount) => ({type: 'INCREASE_BUDGET', payload: { amount }})

/** THUNK IFIED ACTION CREATOR */

export const sampleThunkCreator = () => dispatch => {
    // do some logic
    // do some more logic
    // do some async thangs
    dispatch({ type: 'WHATEVERS_CLEVER' })
}

export const fetchSushisCreator = () => dispatch => {
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
        dispatch({type: 'FETCH_SUSHIS', payload: { sushis }})
    })
}

export const reducer = (prevState=initialState, action) => {
    console.log(action)
    switch(action.type){
        case 'INCREASE_BUDGET':
            return {...prevState, budget: prevState.budget + action.payload.amount}
        case 'UPDATE_INDEX':
            let nextIndex = prevState.startIndex + 4 
            if( nextIndex >= prevState.sushis.length ){ nextIndex = 0 }
            return {...prevState, startIndex: nextIndex}
        case 'EAT_SUSHI':
            let { id, price, eaten } = action.payload
            if(price <= prevState.budget && !eaten){   // when they can eat the sushi
                let newSushis = prevState.sushis.map(sushi => {  
                  if(sushi.id === id){  
                    sushi.eaten = true  
                  }
                  return sushi  
                })
                return {...prevState, 
                    sushis: newSushis,
                    eatenSushis: [...prevState.eatenSushis, id],
                    budget: prevState.budget - price
                }
              } else { // if they can't eat the sushi...
                  return {...prevState}
              }
        case 'FETCH_SUSHIS':
            return {...prevState, sushis: action.payload.sushis}
        default:
            return {...prevState}
    }
}