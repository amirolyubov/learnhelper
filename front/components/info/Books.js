import React, { Component } from 'react'
import cn from 'classnames'
import { spliceString, timestamps2percents } from '../../utils'
import { Loader, Book } from '../little'

class Books extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const {actions: { getBooks } } = this.props
    getBooks()
  }

  handleBookHover(book) {
    const { actions: { hoverBook } } = this.props
    hoverBook(book)
  }
  handleAddClick() {
    const { actions: { add } } = this.props
    add()
  }

  renderBookGraph(book) {
    return (
      <svg width='100%' height='10px'>
        <rect width={`${timestamps2percents(book.start, book.end, Date.now(), 100)}%`} height='100%' fill={book.color}></rect>
        <rect width='100%' height='100%' fill={book.color} opacity='0.5'></rect>
      </svg>
    )
  }
  render() {
    const { data } = this.props
    return (
      <div>
        <h1>Инфо</h1>
        <h2>Книги <div onClick={this.handleAddClick.bind(this)}></div></h2>
        <div className={cn('books', data.isBooksLoading && 'loading')}>
          { data.isBooksLoading
            ? <Loader />
            : data.books.map((book, key) => <Book
                                            book={book}
                                            key={key}
                                            iter={key}
                                            handleHover={this.handleBookHover.bind(this)}
                                            meta={{
                                              render: this.renderBookGraph,
                                              class: 'info'
                                            }} />)
          }
        </div>
        <h2>Статистика</h2>
      </div>
    )
  }
}

export default Books
