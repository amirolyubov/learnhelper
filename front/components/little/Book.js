import React, { Component } from 'react'
import '../../styles/little/book.scss'
import { spliceString } from '../../utils'

const Book = props => (
  <div
    className='book'
    onMouseEnter={props.handleHover.bind(this, props.iter)}
    onMouseLeave={props.handleHover.bind(this, -1)}
    >
    <div className='title'>
      <div>{ props.book.title.length > 25 ? spliceString(props.book.title, 25, '...') : props.book.title }</div>
      <div>{ props.book.author }</div>
    </div>
    {
      props.meta && (
        <div className={props.meta.class}>
          {props.meta.render(props.book)}
        </div>
      )
    }
  </div>
)

export default Book
