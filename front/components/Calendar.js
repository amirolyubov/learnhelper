import React, { Component } from 'react'
import cn from 'classnames'
import '../styles/calendar.scss'
import * as views from '../constants/calendarViewTypes'

import { Month, Year } from './calendar'

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

  handleSwitcherClick(type) {
    this.setState({view: type})
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
    const { view } = this.state
    const { data, actions } = this.props
    return (
      <div className='calendar'>
        <div className='month'>
          {this.renderCalendarCtrls()}
          { view === views.MONTH && <Month data={data} actions={actions}/> }
          { view === views.YEAR && <Year /> }
        </div>
      </div>
    )
  }
}

export default Calendar
