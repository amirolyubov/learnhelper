import React, { Component } from 'react'
import cn from 'classnames'
import '../styles/calendar.scss'
import * as views from '../constants/calendarViewTypes'

import { Month, Year } from './calendar'

class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      year: 2018,
      month: 0,
      view: views.YEAR
    }
  }

  handleSwitcherClick(type) {
    this.setState({view: type})
  }
  handleNavClick(type) {
    // const { year, month } = this.state
    // if (type === 'NEXT') {
    //   this.setState({
    //     month: this.state.month === 11 ? 0 : this.state.month + 1
    //   })
    // } else if (type === 'PREV') {
    //
    // }
  }
  componentWillReceiveProps(props) {
    const { data: { calendarViewType, month, year } } = props
    this.setState({
      view: calendarViewType,
      month: month,
      year: year
    })
  }

  renderCalendarCtrls() {
    const { view } = this.state
    return (
      <div className='controlsWrapper'>
        <div className='weekDays'>
          { ['Пнд', 'Втр', 'Срд', 'Чтв', 'Птн', 'Суб', 'Вск'].map((day, key) => (<div key={key}>{day}</div>)) }
        </div>
        <div className='controls'>
          <div onClick={this.handleNavClick.bind(this, 'PREV')} className='controlButton left'>{'<'}</div>
          <div className='controlButton switcher'>
            <div onClick={this.handleSwitcherClick.bind(this, views.MONTH)} className={cn('', view == views.MONTH && 'active')}>month</div>
            <div onClick={this.handleSwitcherClick.bind(this, views.YEAR)} className={cn('', view == views.YEAR && 'active')}>year</div>
          </div>
          <div onClick={this.handleNavClick.bind(this, 'NEXT')} className='controlButton right'>{'>'}</div>
        </div>
      </div>
    )
  }
  render() {
    const { view, month, year } = this.state
    const { data, actions } = this.props
    return (
      <div className='calendar'>
        <div className='month'>
          {this.renderCalendarCtrls()}
          { view === views.MONTH && <Month year={year} month={month} data={data} actions={actions}/> }
          { view === views.YEAR && <Year year={year} month={month} data={data} actions={actions} /> }
        </div>
      </div>
    )
  }
}

export default Calendar
