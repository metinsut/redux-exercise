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
    default:
      return state
  }
}

export default user
