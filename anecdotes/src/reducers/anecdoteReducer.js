import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_VOTE': {
      const id = action.data.id
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : action.data
      )
    }
    case 'NEW_ANECDOTE': {
      return [...state, action.data]
    }
    case 'INIT_ANECDOTES': {
      return action.data
    }
    default:
      return state
  }
}

export const voteAnecdote = (data) => {
  const anecdote = data
  anecdote.votes = data.votes + 1
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.addVote(anecdote)
    dispatch({
      type: 'NEW_VOTE',
      data: updatedAnecdote
    })
  }
}
export const newAnecdote = (content) => {
  return async dispatch => {
    const createdAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: createdAnecdote
    })
  }
}
export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default anecdoteReducer
