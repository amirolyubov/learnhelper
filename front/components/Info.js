import React, { Component } from 'react'
import '../styles/info.scss'

import * as infoDataTypes from '../constants/infoDataTypes.js'
import { Add, Books, Day } from './info'

class Info extends Component {
  renderByType() {
    const { data, actions } = this.props
    switch (data.infoDataType) {
      case infoDataTypes.BOOKS: return <Books data={data} actions={actions} />
      case infoDataTypes.ADD_NEW: return <Add data={data} actions={actions} />
      case infoDataTypes.DAY: return <Day data={data} actions={actions} />
      default: break;
    }
  }
  render() {
    return (
      <div className='info'>
        { this.renderByType() }
      </div>
    )
  }
}

export default Info
