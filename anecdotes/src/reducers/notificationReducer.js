const notification = { show: false, message: '' }

const notificationReducer = (state = notification, action) => {
  switch (action.type) {
    case 'NEW_VOTE_NOTIFICATION': {
      return { message: `You voted ${action.data}`, show: true }
    }
    case 'NEW_ANECDOTE_NOTIFICATION': {
      return { message: `You create a new anecdote: ${action.data}`, show: true }
    }
    case 'HIDE_NOTIFICATION': {
      return notification
    }
    default:
      return state
  }
}

export const notificationNewVote = (content) => {
  return {
    type: 'NEW_VOTE_NOTIFICATION',
    data: content
  }
}
export const notificationNewAnecdote = (anecdote) => {
  return {
    type: 'NEW_ANECDOTE_NOTIFICATION',
    data: anecdote
  }
}
export const notificationHide = () => {
  return {
    type: 'HIDE_NOTIFICATION'
  }
}

export default notificationReducer
