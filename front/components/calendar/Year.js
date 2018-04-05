import React, { Component } from 'react'
import cn from 'classnames'
import { generateYearTimestampsMatrix, getMonths } from '../../utils'

class Month extends Component {
  constructor(props) {
    super(props)
    this.state = {
      year: 2018,
      month: 0
    }
  }
  handleMonthClick() {
    const { month, selectMonth } = this.props
    selectMonth(month[0].getMonth(), month[0].getFullYear())
  }
  render() {
    const { month } = this.props
    return (
      <div onClick={this.handleMonthClick.bind(this)} className='month'>
        <div className='name'>{ getMonths()[month[0].getMonth()] } <span>{ month[0].getFullYear() }</span></div>
      </div>
    )
  }
}

class Year extends Component {
  constructor(props) {
    super(props)

    this.state = {
      year: 2018,
      month: 0,
      yearMatrix: []
    }
  }


  componentDidMount() {
    this.setState({
      yearMatrix: generateYearTimestampsMatrix(this.state.year, this.state.month)
    })
  }
  componentDidUpdate(next, prev) {
    if (next.month != prev.month) this.setState({
                                    month: next.month,
                                    yearMatrix: generateYearTimestampsMatrix(this.state.year, next.month)
                                  })

    if (next.year != prev.year) this.setState({
                                    year: next.year,
                                    yearMatrix: generateYearTimestampsMatrix(next.year, next.month)
                                  })
  }

  render() {
    const { yearMatrix } = this.state
    const { actions: { selectMonth } } = this.props

    console.log(this.state.month, this.state.year);

    return (
      <div className='year'>
        { yearMatrix.map((month, key) => <Month key={key} selectMonth={selectMonth} month={month} />) }
      </div>
    )
  }
}

export default Year
