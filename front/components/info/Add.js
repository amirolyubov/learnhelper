import React, { Component } from 'react'
import cn from 'classnames'
import { spliceString, timestamps2percents } from '../../utils/utils.js'
import { Color, ScrollContainer } from '../little'

class Input extends Component {
  render() {
    const {handleChange, title, value, half} = this.props
    return (
      <div className={cn('input', half && 'half')}>
        <div className='title'>{title}</div>
        <input value={value} onChange={handleChange}/>
      </div>
    )
  }
}
class Button extends Component {
  render() {
    const { title, handleClick } = this.props
    return <div className='button' onClick={handleClick}>{ title }</div>
  }
}

class Add extends Component {
  constructor(props) {
    super(props)
  }

  handleInputChange() {

  }
  handleAddClick() {
    const { actions: { add }, data } = this.props
    add(data)
  }

  render() {
    const { data } = this.props
    return (
      <div>
        <h1>Добавить</h1>
        <ScrollContainer heightAmends={'61px'}>
          <div className='addNew'>
            <h2>Описание </h2>
            <Input
              title='название'
              value=''
              handleChange={this.handleInputChange.bind(this)}
              />
            <Input
              title='автор'
              value=''
              handleChange={this.handleInputChange.bind(this)}
              /> <br />
            <h2>Данные</h2>
            <Input
              title='страниц в день'
              value=''
              />
            <Input
              title='страниц всего'
              value=''
              />
            <Color />
            <Button
              title='создать'
              handleClick={this.handleAddClick.bind(this)}
              />
          </div>
        </ScrollContainer>
      </div>
    )
  }
}

export default Add
