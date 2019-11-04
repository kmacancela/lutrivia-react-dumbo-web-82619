import React from 'react'

class Header extends React.Component {

  handleClick = () => {
    this.props.newGame()
  }

  render() {
    return (
      <div>
        <h1>Lutrivia</h1>
        <button onClick={ this.handleClick }>New Game</button>
        Score: { this.props.score }
      </div>
    )
  }
}
export default Header
