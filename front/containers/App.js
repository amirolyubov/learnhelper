import React, { Component } from 'react'
import cn from 'classnames'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux'

import * as appActions from '../actions/app.js'
import * as authActions from '../actions/auth.js'
import { Calendar, Info, Header, Err } from '../components'

class App extends Component {
  render() {
    const { app, err, actions, authActions } = this.props
    return (
      <div className='app'>
        <div className='col-1'></div>
        <div className={cn('contentWrapper', 'col-8', err.isError && 'hasError')}>
          <Header handleSignout={authActions.signOut}/>
          <div className='content'>
            <Info
              data={app}
              actions={actions}
              />
            <Calendar
              data={app}
              actions={actions}
              />
          </div>
        </div>
        <div className='col-1'></div>
        { err.isError && <Err err={err.err} handleOk={actions.confirmError}/> }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    app: state.app,
    err: state.err
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(appActions, dispatch),
    authActions: bindActionCreators(authActions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
