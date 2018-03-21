import React, { Component } from 'react'
import '../../styles/little/book.scss'
import { spliceString } from '../../utils/utils'

const Book = props => (
  <div
    key={props.iter}
    className='book'
    onMouseEnter={props.handleHover.bind(this, props.iter)}
    onMouseLeave={props.handleHover.bind(this, -1)}
    >
    <div className='title'>
      <div>{ props.book.title.length > 25 ? spliceString(props.book.title, 25, '...') : props.book.title }</div>
      <div>{ props.book.author }</div>
    </div>
    <div className='meta'>
      {props.renderMeta && props.renderMeta(props.book)}
    </div>
  </div>
)

export default Book
