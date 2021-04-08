const filter = ''

const filterReducer = (state = filter, action) => {
  switch (action.type) {
    case 'UPDATE_FILTER': {
      return action.data
    }
    default:
      return state
  }
}
export const updateFilter = (input) => {
  return {
    type: 'UPDATE_FILTER',
    data: input
  }
}
export default filterReducer
