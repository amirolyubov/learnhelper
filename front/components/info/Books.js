import React, { Component } from 'react'
import { spliceString, timestamps2percents } from '../../utils/utils.js'

class Books extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hoveredBook: -1,
    }
  }

  handleBookHover(book) {
    this.setState({ hoveredBook: book })
  }

  renderBookGraph(book) {
    return (
      <svg width='100%' height='10px'>
        <rect width={`${timestamps2percents(book.start, book.end, Date.now(), 100)}%`} height='100%' fill={book._color}></rect>
        <rect width='100%' height='100%' fill={book._color} opacity='0.5'></rect>
      </svg>
    )
  }
  renderBook(book, key) {
    const { hoveredBook } = this.state
    return (
      <div
        key={key}
        className='book'
        onMouseEnter={this.handleBookHover.bind(this, key)}
        onMouseLeave={this.handleBookHover.bind(this, -1)}
        >
        <div className='title'>
          <div>{ book.title.length > 25 ? spliceString(book.title, 25, '...') : book.title }</div>
          <div>{ book.author }</div>
        </div>
        <div className='meta'>
          {this.renderBookGraph(book)}
        </div>
      </div>
    )
  }
  render() {
    const { data } = this.props
    return (
      <div className='booksWrapper'>
        <h1>Инфо</h1>
        <h2>Книги</h2>
        <div className='books'>{ data.books.map(this.renderBook.bind(this)) }</div>
        <h2>События</h2>
      </div>
    )
  }
}

export default Books
