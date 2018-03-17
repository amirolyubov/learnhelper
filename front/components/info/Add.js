import React, { Component } from 'react'
import cn from 'classnames'
import { spliceString, timestamps2percents } from '../../utils/utils.js'
import { Color, ScrollContainer } from '../little'

class Input extends Component {
  render() {
    const {handleChange, title, value, half, name} = this.props
    return (
      <div className={cn('input', half && 'half')}>
        <div className='title'>{title}</div>
        <input name={name} value={value} onChange={handleChange}/>
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

  handleInputChange(e) {
    const { actions: { updateAddBookField } } = this.props
    e.source == 'hex'
    ? updateAddBookField('color', e.hex)
    : updateAddBookField(e.target.name, e.target.value)
  }
  handleAddClick() {
    const { actions: { saveBook }, data: { newBook } } = this.props
    saveBook(newBook)
  }

  render() {
    const { data: { newBook } } = this.props
    return (
      <div>
        <h1>Добавить</h1>
        <ScrollContainer heightAmends={'61px'}>
          <div className='addNew'>
            <h2>Описание </h2>
            <Input
              title='название'
              value={newBook.title}
              name='title'
              handleChange={this.handleInputChange.bind(this)}
              />
            <Input
              title='автор'
              value={newBook.author}
              name='author'
              handleChange={this.handleInputChange.bind(this)}
              /> <br />
            <h2>Данные</h2>
            <Input
              title='страниц в день'
              value={newBook.pages4day}
              name='pages4day'
              handleChange={this.handleInputChange.bind(this)}
              />
            <Input
              title='страниц всего'
              value={newBook.pagesTotal}
              name='pagesTotal'
              handleChange={this.handleInputChange.bind(this)}
              />
            <Color
              color={newBook.color}
              onChange={this.handleInputChange.bind(this)}
              />
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
