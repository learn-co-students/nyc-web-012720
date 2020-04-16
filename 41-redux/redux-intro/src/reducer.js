
const initialState = {
    likes: 0,
    text: '',
    darkMode: false,
    thangs: []
}

export const reducer = (prevState=initialState, action) => {
    console.log('inside of reducer', prevState, action)
    switch(action.type){
        case 'LIKE':
          return { ...prevState, likes: prevState.likes + 1 };
        case 'DISLIKE':
          return {...prevState, likes: prevState.likes - 1 }
        case 'TOGGLE_DARK':
          return {...prevState, darkMode: !prevState.darkMode }
        case 'HANDLE_TEXT_CHANGE':
          return {...prevState, text: action.payload.text } // payload looks like {text: 'my new string here'}
        case 'ADD_TEXT':
          return {...prevState, 
            text: '',
            thangs: [prevState.text, ...prevState.thangs]
          }
        default:
          return {...prevState};
    }
}