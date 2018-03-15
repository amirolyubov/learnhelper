import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'

import * as appActions from '../actions/app.js'
import { Calendar, Info } from '../components'

class App extends Component {
  render() {
    const { app, actions } = this.props
    return (
      <div className='app'>
        <div className='col-1'></div>
        <div className='content col-8'>
          <Info />
          <Calendar
            data={app}
            actions={actions}
            />
        </div>
        <div className='col-1'></div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    app: state.app
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(appActions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
