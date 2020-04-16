export const likeCreator = () => ({type: 'LIKE'})
export const dislikeCreator = () => ({type: 'DISLIKE'})
export const toggleCreator = () => ({type: 'TOGGLE_DARK'})
export const changeCreator = (value) => ({type: 'HANDLE_TEXT_CHANGE', payload: { text: value }})