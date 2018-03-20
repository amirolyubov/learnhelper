import React, { Component } from 'react'
import cn from 'classnames'
import { date2beauty } from '../../utils/utils'

class Day extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data: { day } } = this.props
    return (
      <div>
        <h1>{ date2beauty(new Date(day.date)) }</h1>
        <h2>Книги</h2>
        <h2>Статистика</h2>
      </div>
    )
  }
}

export default Day
