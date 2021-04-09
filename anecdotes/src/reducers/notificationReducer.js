const notifications = [{ show: false, message: '', id: 0 }]

const notificationReducer = (state = notifications, action) => {
  switch (action.type) {
    case 'NEW_NOTIFICATION': {
      return state.concat({ message: action.data.content, show: true, id: action.data.id })
    }
    case 'HIDE_NOTIFICATION': {
      return state.filter(n => n.id !== action.data.id)
    }
    default:
      return state
  }
}

let nextNotificationId = 1

export const setNotification = (content, seconds) => {
  const id = nextNotificationId++
  return async dispatch => {
    dispatch({
      type: 'NEW_NOTIFICATION',
      data: {
        content: content,
        id: id
      }
    })

    setTimeout(() => {
      dispatch(hideNotification(id))
    }, seconds * 1000)
  }
}

const hideNotification = (id) => {
  return {
    type: 'HIDE_NOTIFICATION',
    data: {
      content: '',
      id: id
    }
  }
}

export default notificationReducer
