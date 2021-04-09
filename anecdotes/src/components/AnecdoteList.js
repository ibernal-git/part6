import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const vote = (anecdote) => {
    props.voteAnecdote(anecdote)
    props.setNotification(`you voted '${anecdote.content}'`, 5)
  }
  const anecdotesStyle = {
    marginTop: 30
  }

  return (
    <div style={anecdotesStyle}>
      {props.anecdotes.map(anecdote =>
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes
      .sort((a, b) => b.votes - a.votes)
      .filter(({ content }) =>
        content === undefined
          ? content
          : content.toLowerCase().includes(state.filter.toLowerCase())
      )
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  setNotification
}

const ConnectedList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedList
