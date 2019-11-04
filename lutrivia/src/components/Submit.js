import React from 'react'
// import { Form } from 'semantic-ui-react'

class Submit extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault()
    alert(`Thanks for playing, ${event.target.name.value}! Your final score was ${ this.props.score }.`)
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input type="text" placeholder="Name" name="name" />
          <input type="submit" name="Submit" />
        </form>
      </div>
    )
  }
}
export default Submit
