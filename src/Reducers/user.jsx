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
    default:
      return state
  }
}

export default user
