import React, { Component } from 'react'
import cn from 'classnames'
import { generateMonthTimeStampsMatrix } from '../../utils'

class Month extends Component {
  constructor(props) {
    super(props)

    this.state = {
      monthMatrix: [],
      year: 2018,
      month: 0,
      selected: 0
    }
  }
  componentDidMount () {
    this.setState({
      monthMatrix: generateMonthTimeStampsMatrix(true, this.state.month, this.state.year)
    })
  }
  componentWillReceiveProps(props) {
    this.setState({
      month: props.month,
      year: props.year,
      monthMatrix: generateMonthTimeStampsMatrix(true, this.state.month, this.state.year)
    })
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

    console.log(month, year);

    const parseDate = (book, key) => {
      if (book.start.getFullYear() < year) {
        if (book.end.getFullYear() > year) return this.renderBookStatus('process', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
        if (book.end.getFullYear() == year) {
          if (book.end.getMonth() > month) return this.renderBookStatus('process', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
          if (book.end.getMonth() == month) {
            if (book.end.getDate() > _current.getDate()) return this.renderBookStatus('process', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
            if (book.end.getDate() == _current.getDate()) return this.renderBookStatus('end', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
          }
        }
      }
      if (book.end.getFullYear() > year) {
        if (book.start.getFullYear() == year) {
          if (book.start.getMonth() < month) return this.renderBookStatus('process', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
          if (book.start.getMonth() == month) {
            if (book.start.getDate() < _current.getDate()) return this.renderBookStatus('process', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
            if (book.start.getDate() == _current.getDate()) return this.renderBookStatus('start', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
          }
        }
      }
      if (book.start.getFullYear() == year &&
          book.end.getFullYear() == year) {
        if (book.start.getMonth() < month) {
          if (book.end.getMonth() > month) return this.renderBookStatus('process', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
          if (book.end.getMonth() == month) {
            if (book.end.getDate() > _current.getDate()) return this.renderBookStatus('process', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
            if (book.end.getDate() == _current.getDate()) return this.renderBookStatus('end', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
          }
        }
        if (book.end.getMonth() > month) {
          if (book.start.getMonth() == month) {
            if (book.start.getDate() < _current.getDate()) return this.renderBookStatus('process', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
            if (book.start.getDate() == _current.getDate()) return this.renderBookStatus('start', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
          }
        }
        if (book.start.getMonth() == month &&
            book.end.getMonth() == month) {
          if (book.start.getDate() < _current.getDate() &&
              book.end.getDate() > _current.getDate()) return this.renderBookStatus('process', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
          if (book.start.getDate() == _current.getDate()) return this.renderBookStatus('start', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
          if (book.end.getDate() == _current.getDate()) return this.renderBookStatus('end', { top: book._top, color: book.color, hovered: key == hoveredBook }, key)
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

    return day === null
    ? (
      <div key={key} className='noday'></div>
    )
    : (
      <div
        key={key}
        onClick={this.handleDayClick.bind(this, day)}
        className={cn(
          'day',
          day.getDate() == new Date().getDate() && 'today',
          day.getDate() == selected && 'selected',
          (key == 5 || key == 6) && 'holyday'
        )}
        >
        <span>{ day.getDate() }</span>
        { this.renderDayProcess(day, key) }
      </div>
    )
  }

  handleDayClick(day) {
    const { actions: { getDay, deselectDay } } = this.props
    const { selected } = this.state

    day.getDate() != selected ? getDay(day) : deselectDay()
    this.setState({
      selected: day.getDate() != selected ? day.getDate() : 0
    })
  }

  render() {
    const { monthMatrix } = this.state
    return monthMatrix.map((week, key) => (
      <div key={key} className='week'>
        { week.map((day, dayKey) => this.renderDay(day, dayKey)) }
      </div>
    ))
  }
}

export default Month
