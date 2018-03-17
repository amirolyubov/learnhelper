import React, { Component } from 'react'
import '../styles/err.scss'

class Err extends Component {
  handleOkClick() {
    const { handleOk } = this.props
    handleOk()
  }
  render() {
    const { err } = this.props
    return (
      <div className='errorWrapper'>
        <div className='box'>
          <h2>что-то произошло непонятное</h2>
          <p className='status'>{ err.status || 201 }</p>
          <p className='message'>{ err.stack.toString() }</p>
          <div className='button' onClick={this.handleOkClick.bind(this)}>само пройдет</div>
        </div>
      </div>
    )
  }
}

export default Err
