import React from 'react'
import Question from './Question'

class QuestionsList extends React.Component {

  render() {
    return (
      <div>
        { this.props.questions.map(question => {
          return <Question question={ question } incrementScore={ this.props.incrementScore } />
        }) }
      </div>
    )
  }
}
export default QuestionsList
