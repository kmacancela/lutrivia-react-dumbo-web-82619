import React, {Fragment} from 'react'

class Question extends React.Component {

  handleClick = (event) => {
    if (event.target.value === this.props.question.answer.toString()) {
      this.props.incrementScore()
    } else {
      console.log("false")
    }
    Array.from(event.target.parentNode.childNodes).map(child => child.disabled = true)
  }

  render() {
    return (
      <Fragment>
        <h3>{ this.props.question.text }</h3>
        <div onClick= { this.handleClick }>
          <button value="true">True</button>
          <button value="false">False</button>
        </div>
      </Fragment>
    )
  }
}
export default Question
