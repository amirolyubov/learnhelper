import React, { Component } from 'react'
import cn from 'classnames'
import '../styles/calendar.scss'
import { renderDate } from '../utils/utils.js'

class Calendar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      monthMatrix: renderDate(true),
      month: 2,
      selected: 0
    }
  }

  handleDayClick(day) {
    const { actions: { getDay, deselectDay } } = this.props
    const { selected } = this.state

    day != selected ? getDay() : deselectDay()
    this.setState({
      selected: day != selected ? day : 0
    })
  }


  renderBookStatus(type, params, key) {
    if (type == 'process') {
      return (
        <rect
          key={key}
          width='100%'
          height='3px'
          y={`calc(50% + ${params.top})`}
          fill={params.color}
          ></rect>
      )
    } else if (type == 'start') {
      return (
        <g key={key}>
          <circle
            cx='35%'
            cy={`calc(50% + ${params.top} + 1.5px)`}
            r='4px'
            fill={params.color}
            />
          <rect
            width='65%'
            height='3px'
            x='35%'
            y={`calc(50% + ${params.top})`}
            fill={params.color}
            ></rect>
        </g>
      )
    } else if (type == 'end') {
      return (
        <g key={key}>
          <circle
            cx='65%'
            cy={`calc(50% + ${params.top} + 1.5px)`}
            r='4px'
            fill={params.color}
            />
          <rect
            width='65%'
            height='3px'
            y={`calc(50% + ${params.top})`}
            fill={params.color}
            ></rect>
        </g>
      )
    }
  }

  renderDayProcess(day) {
    const { data: { books } } = this.props
    const { month } = this.state

    return (
      <svg width='100%' height='100%'>
        {
          books.map((book, key) => {
            if (day == new Date(book.start).getDate()) return this.renderBookStatus('start', { top: book._top, color: book._color }, key)
            if (day > new Date(book.start).getDate() && day < new Date(book.end).getDate()) return this.renderBookStatus('process', { top: book._top, color: book._color }, key)
            if (day == new Date(book.end).getDate()) return this.renderBookStatus('end', { top: book._top, color: book._color }, key)
          })
        }
      </svg>
    )
  }
  renderDay(day, key) {
    const { selected } = this.state
    return (
      <div
        key={key}
        onClick={this.handleDayClick.bind(this, day)}
        className={cn(
          day == null ? 'noday' : 'day',
          day == selected && 'selected',
          (key == 5 || key == 6) && 'holyday'
        )}
        >
        <span>{day}</span>
        { day != null && this.renderDayProcess(day) }
        { day != null
          && (
            <div>
            </div>
            )
        }
      </div>
    )
  }
  renderMonth() {
    const { monthMatrix } = this.state
    return monthMatrix.map((week, key) => (
      <div key={key} className='week'>
        { week.map((day, dayKey) => this.renderDay(day, dayKey)) }
      </div>
    ))
  }
  render() {
    const {} = this.props
    return (
      <div className='calendar'>
        <div className='month'>
          <div className='weekDays'>
            { ['Пнд', 'Втр', 'Срд', 'Чтв', 'Птн', 'Суб', 'Вск'].map((day, key) => (<div key={key}>{day}</div>)) }
          </div>
          {this.renderMonth()}
        </div>
      </div>
    )
  }
}

export default Calendar