import React from 'react'
import Header from './Header'
import QuestionsList from './QuestionsList'
import Submit from './Submit'
import Data from '../data'

class Index extends React.Component {
  state = {
    questions: [],
    score: 0,
    newGame: false
  }

  componentDidMount() {
    this.setState({
      questions: Data.questions
    })
  }

  incrementScore = () => {
    this.setState({
      score: this.state.score + 1
    })
  }

//not sure yet
  newGame = () => {
    this.setState({
      score: 0,
      newGame: true
    })
  }

  render() {
    return (
      <div>
        <Header score={ this.state.score } newGame={ this.newGame }/>
        <QuestionsList questions={ this.state.questions } incrementScore={ this.incrementScore } newGame={ this.state.newGame }/>
        <Submit score={ this.state.score} newGame={ this.state.newGame }/>
      </div>
    )
  }
}
export default Index
