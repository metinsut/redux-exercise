<<<<<<< HEAD
const user = (state = { number: 30 }, action) => {

  switch (action.type) {
    case 'ARTTIR':
          return {
            number: state.number + action.payload
          }
      break;
    case 'AZALT':
      return  {
          number: state.number - action.payload
        }
      break;
=======
const initialState = { number: 30 }

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'ARTTIR':
      return Object.assign({}, state, {
        number: state.number + action.payload
      })
    case 'AZALT':
      return Object.assign({}, state, {
        number: state.number - action.payload
      })
>>>>>>> 8753c545e0f3218872d2faf9df889f9fe1dccb28
    default:
      return state
  }
}

export default user
