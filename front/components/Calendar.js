import React, { Component } from 'react'
import cn from 'classnames'
import '../styles/calendar.scss'
import { generateTimeStampsMatrix } from '../utils/utils.js'
import * as views from '../constants/calendarViewTypes'

class Calendar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      monthMatrix: [],
      year: 2018,
      month: 2,
      selected: 0,
      view: views.MONTH
    }
  }

  componentDidMount () {
    this.setState({
      monthMatrix: generateTimeStampsMatrix(true, this.state.month, this.state.year)
    })
  }

  handleDayClick(day) {
    const { actions: { getDay, deselectDay } } = this.props
    const { selected } = this.state

    new Date(day).getDate() != selected ? getDay(day) : deselectDay()
    this.setState({
      selected: new Date(day).getDate() != selected ? new Date(day).getDate() : 0
    })
  }
  handleSwitcherClick(type) {
    this.setState({view: type})
  }


  renderBookStatus(type, params, key) {
    if (type == 'process') {
      return (
        <rect
          key={key}
          width='100%'
          height={params.hovered ? '4px' : '2px'}
          y={`calc(80% - ${params.top} - ${params.hovered ? '1px' : '0px'})`}
          fill={params.color}
          ></rect>
      )
    } else if (type == 'start') {
      return (
        <g key={key}>
          <circle
            cx='35%'
            cy={`calc(80% - ${params.top} + 1px)`}
            r={params.hovered ? '4px' : '3px'}
            fill={params.color}
            />
          <rect
            width='65%'
            height={params.hovered ? '4px' : '2px'}
            x='35%'
            y={`calc(80% - ${params.top} - ${params.hovered ? '1px' : '0px'})`}
            fill={params.color}
            ></rect>
        </g>
      )
    } else if (type == 'end') {
      return (
        <g key={key}>
          <circle
            cx='65%'
            cy={`calc(80% - ${params.top} + 1px)`}
            r={params.hovered ? '4px' : '3px'}
            fill={params.color}
            />
          <rect
            width='65%'
            height={params.hovered ? '4px' : '2px'}
            y={`calc(80% - ${params.top} - ${params.hovered ? '1px' : '0px'})`}
            fill={params.color}
            ></rect>
        </g>
      )
    }
  }

  renderDayProcess(day, dayKey) {
    const { data: { books, hoveredBook } } = this.props
    const { month, year } = this.state
    const _current = new Date(day)

    const parseDate = (book, key) => {
      if (new Date(book.start).getFullYear() < year) {
        if (new Date(book.end).getFullYear() > year) return this.renderBookStatus('process', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
        if (new Date(book.end).getFullYear() == year) {
          if (new Date(book.end).getMonth() > month) return this.renderBookStatus('process', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
          if (new Date(book.end).getMonth() == month) {
            if (new Date(book.end).getDate() > _current.getDate()) return this.renderBookStatus('process', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
            if (new Date(book.end).getDate() == _current.getDate()) return this.renderBookStatus('end', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
          }
        }
      }
      if (new Date(book.end).getFullYear() > year) {
        if (new Date(book.start).getFullYear() == year) {
          if (new Date(book.start).getMonth() < month) return this.renderBookStatus('process', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
          if (new Date(book.start).getMonth() == month) {
            if (new Date(book.start).getDate() < _current.getDate()) return this.renderBookStatus('process', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
            if (new Date(book.start).getDate() == _current.getDate()) return this.renderBookStatus('start', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
          }
        }
      }
      if (new Date(book.start).getFullYear() == year &&
          new Date(book.end).getFullYear() == year) {
        if (new Date(book.start).getMonth() < month) {
          if (new Date(book.end).getMonth() > month) return this.renderBookStatus('process', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
          if (new Date(book.end).getMonth() == month) {
            if (new Date(book.end).getDate() > _current.getDate()) return this.renderBookStatus('process', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
            if (new Date(book.end).getDate() == _current.getDate()) return this.renderBookStatus('end', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
          }
        }
        if (new Date(book.end).getMonth() > month) {
          if (new Date(book.start).getMonth() == month) {
            if (new Date(book.start).getDate() < _current.getDate()) return this.renderBookStatus('process', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
            if (new Date(book.start).getDate() == _current.getDate()) return this.renderBookStatus('start', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
          }
        }
        if (new Date(book.start).getMonth() == month &&
            new Date(book.end).getMonth() == month) {
          if (new Date(book.start).getDate() < _current.getDate() &&
              new Date(book.end).getDate() > _current.getDate()) return this.renderBookStatus('process', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
          if (new Date(book.start).getDate() == _current.getDate()) return this.renderBookStatus('start', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
          if (new Date(book.end).getDate() == _current.getDate()) return this.renderBookStatus('end', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
        }
      }
    }

    return (
      <svg width='100%' height='100%'>
        {
          books.map((book, key) => !book.holydays ? (!(dayKey == 5 || dayKey == 6) && parseDate(book, key)) : parseDate(book, key))
        }
      </svg>
    )
  }
  renderDay(day, key) {
    const { selected } = this.state
    return (
      <div
        key={key}
        onClick={new Date(day).getDate() ? this.handleDayClick.bind(this, day) : null}
        className={cn(
          isNaN(new Date(day).getDate()) ? 'noday' : 'day',
          new Date(day).getDate() == new Date().getDate() && 'today',
          new Date(day).getDate() == selected && 'selected',
          (key == 5 || key == 6) && 'holyday'
        )}
        >
        <span>{ !isNaN(new Date(day).getDate()) && new Date(day).getDate() }</span>
        { !isNaN(new Date(day).getDate()) && this.renderDayProcess(new Date(day), key) }
        { !isNaN(new Date(day).getDate())
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
  renderCalendarCtrls() {
    const { view } = this.state
    return (
      <div className='controlsWrapper'>
        <div className='weekDays'>
          { ['Пнд', 'Втр', 'Срд', 'Чтв', 'Птн', 'Суб', 'Вск'].map((day, key) => (<div key={key}>{day}</div>)) }
        </div>
        <div className='controls'>
          <div className='controlButton left'>{'<'}</div>
          <div className='controlButton switcher'>
            <div onClick={this.handleSwitcherClick.bind(this, views.MONTH)} className={cn('', view == views.MONTH && 'active')}>month</div>
            <div onClick={this.handleSwitcherClick.bind(this, views.YEAR)} className={cn('', view == views.YEAR && 'active')}>year</div>
          </div>
          <div className='controlButton right'>{'>'}</div>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div className='calendar'>
        <div className='month'>
          {this.renderCalendarCtrls()}
          {this.renderMonth()}
        </div>
      </div>
    )
  }
}

export default Calendar
