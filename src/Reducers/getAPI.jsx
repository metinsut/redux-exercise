const user = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          age: action.age,
          city: action.city
        }
      ]
    default:
      return state
  }
}

export default user
