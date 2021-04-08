
const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_VOTE': {
      const id = action.data.id
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote
      )
    }
    case 'NEW_ANECDOTE': {
      console.log(action)
      return [...state, action.data]
    }
    case 'INIT_ANECDOTES': {
      return action.data
    }
    default:
      return state
  }
}

export const voteAnecdote = (id) => {
  return {
    type: 'NEW_VOTE',
    data: { id }
  }
}
export const newAnecdote = (data) => {
  return {
    type: 'NEW_ANECDOTE',
    data
  }
}
export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}

export default anecdoteReducer
