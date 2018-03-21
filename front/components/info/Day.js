import React, { Component } from 'react'
import cn from 'classnames'
import { date2beauty } from '../../utils/utils'

class Day extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { data: { day } } = this.props
    console.log(day)
    return (
      <div>
        <h1>{ date2beauty(new Date(day.date)) }</h1>
        <h2>Статистика</h2>
        <h2>Чтение</h2>
        <h2>События</h2>
      </div>
    )
  }
}

export default Day
