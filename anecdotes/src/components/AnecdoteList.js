import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.sort((a, b) => b.votes - a.votes))

  const vote = (id) => {
    dispatch(voteAnecdote(id))
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
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>

      )}
    </div>
  )
}
export default AnecdoteList