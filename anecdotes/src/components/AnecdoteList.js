import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { notificationNewVote, notificationHide } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const filter = useSelector(({ filter }) => filter)
  console.log(filter)
  const anecdotes = useSelector(({ anecdotes }) =>
    anecdotes
      .sort((a, b) => b.votes - a.votes)
      .filter(({ content }) =>
        content === undefined
          ? content
          : content.toLowerCase().includes(filter.toLowerCase())
      )
  )

  const vote = (anecdote) => {
    dispatch(voteAnecdote(anecdote))
    dispatch(notificationNewVote(anecdote.content))
    setTimeout(() => {
      dispatch(notificationHide())
    }, 5000)
  }
  const anecdotesStyle = {
    marginTop: 30
  }

  return (
    <div style={anecdotesStyle}>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>

      )}
    </div>
  )
}
export default AnecdoteList
