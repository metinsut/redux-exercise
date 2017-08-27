const user = (state = {
  number: 30
}, action) => {
  switch (action.type) {
    case 'ARTTIR':
    console.log(action.payload);
    console.log(state.number);
      return [
        state.number += action.payload
      ]
    case 'AZALT':
      return [
        state = {
          ...state,
          number: state.number - action.payload
        }
      ]
    default:
      return state
  }
}

export default user
