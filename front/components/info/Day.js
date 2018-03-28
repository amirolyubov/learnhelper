import React, { Component } from 'react'
import cn from 'classnames'
import { date2beauty } from '../../utils'
import { Book } from '../little'
import '../../styles/day.scss'

class Day extends Component {
  constructor(props) {
    super(props)
  }

  handleBookHover(book) {
    const { actions: { hoverBook } } = this.props
    hoverBook(book)
  }
  renderBookInfo(book) {
    return (
      <div>{book.color}</div>
    )
  }

  render() {
    const { data: { day } } = this.props
    return (
      <div className='day'>
        <h1>{ date2beauty(new Date(day.date)) }</h1>
        <h2>Статистика</h2>
        <div className='stats'>
          <div className='total'>
            <div className='pages'>{ `${day.totalPages} стр` }</div>
            <div className='time'>{ `${((day.totalTime - (day.totalTime % 60)) / 60) != 0 ? (day.totalTime - (day.totalTime % 60)) / 60 + 'ч ' : ''}${day.totalTime % 60}мин` }</div>
          </div>
        </div>
        <h2>Чтение</h2>
        <div>
          {
            day.books.map((book, key) => <Book
            book={book}
            key={key}
            iter={key}
            handleHover={this.handleBookHover.bind(this, key)}
            meta={{
              render: this.renderBookInfo.bind(this),
              class: 'test'
            }}
            />)
          }
        </div>
        <h2>События</h2>
      </div>
    )
  }
}

export default Day
