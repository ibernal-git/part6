import React from 'react'
import { useDispatch } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { notificationNewAnecdote, notificationHide } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const create = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(newAnecdote(content))
    dispatch(notificationNewAnecdote(content))

    setTimeout(() => {
      dispatch(notificationHide())
    }, 5000)
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={create}>
        <div><input name='anecdote' /></div>
        <button>create</button>
      </form>
    </>
  )
}
export default AnecdoteForm
