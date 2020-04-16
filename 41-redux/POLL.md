1. Which of the below are key elements of message passing? ( Multiple Choice)
** Answer 1 **: Central function
Answer 2: Reducer
** Answer 3 **: type
** Answer 4 **: payload
Answer 5: Provider
** Answer 6 **: initial state

Explanation: The core elements of message passing are the central function (*sometimes* called a reducer), a type and payload, and some initial state to make the change on.



2. When using react redux, which of the following do we write? ( Single Choice)
** Answer 1 **: reducer
Answer 2: dispatcher

Explanation: We only write the code for the reducer function once we are using redux and react-redux. They write the dispatch function and provide it to us so we can invoke it.


3. Which of the following functions need to return an object? ( Multiple Choice)
** Answer 1 **: mapStateToProps (mSP)
** Answer 2 **: mapDispatchToProps (mDP)
Answer 3: Provider
Answer 4: createStore
** Answer 5 **: reducer

Explanation: mSP, mDP and reducer all need to return objects. mSP and mDP need to do so to add to a component props and reducer needs to do so to return the calculated version of state after an action has been dispatched. 
createStore does return an object (store) but we don't write it and Provider is a component. 


4. Which of the following ways are valid to represent an action? ( Single Choice)
** Answer 1 **: {type: 'EAT', payload: 'burgers'}
Answer 2: const createEatAction = () => { {type: 'NEXT_PAGE'} }
** Answer 3 **: const createEatAction = () => ({type: 'EAT' })
Answer 4: {payload: 8}

Explanation: Actions must be objects with at least a key of type and an optional key of payload. Answer 2 does not implicitly return and so that actionCreator would not work correctly. 


5. Which should be done to correct the reducer below? const reducer = (prevState=initial, action) => { switch(action.type){ case 'fetchSushis': return {...prevState, sushis: action.payload } } } ( Multiple Choice)
Answer 1: Remove the spread operator on prevState in the return
** Answer 2 **: Change case 'fetchSushis' should be case 'FETCH_SUSHIS'
** Answer 3 **: Change switch(action) to switch(action.type)
** Answer 4 **: Add a default case

Explanation: The only thing that should not be done is removing the spread operator. We need the spread operator in order to make a copy of prevState.

