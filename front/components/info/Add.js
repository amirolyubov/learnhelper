import React, { Component } from 'react'
import { spliceString, timestamps2percents } from '../../utils/utils.js'


class Input extends Component {
  render() {
    const {handleChange, title, value} = this.props
    return (
      <div className='input'>
        <div className='title'>{title}</div>
        <input value={value} onChange={handleChange}/>
      </div>
    )
  }
}

class Add extends Component {
  constructor(props) {
    super(props)
  }

  handleInputChange() {
    console.log(123)
  }

  render() {
    const { data } = this.props
    return (
      <div>
        <h1>Добавить</h1>
        <h2>Описание </h2>
        <div className='addNew'>
        </div>
        <Input
          title='название'
          value=''
          handleChange={this.handleInputChange.bind(this)}
          />
        <Input
          title='автор'
          value=''
          handleChange={this.handleInputChange.bind(this)}
          />
      </div>
    )
  }
}

export default Add
