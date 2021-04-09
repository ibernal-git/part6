const notification = { show: false, message: '' }

const notificationReducer = (state = notification, action) => {
  switch (action.type) {
    case 'NEW_NOTIFICATION': {
      return { message: action.data, show: true }
    }
    case 'HIDE_NOTIFICATION': {
      return notification
    }
    default:
      return state
  }
}

export const setNotification = (content, seconds) => {
  return async dispatch => {
    dispatch({
      type: 'NEW_NOTIFICATION',
      data: content
    })

    setTimeout(() => {
      dispatch(hideNotification())
    }, seconds * 1000)
  }
}

const hideNotification = () => {
  return {
    type: 'HIDE_NOTIFICATION'
  }
}

export default notificationReducer
