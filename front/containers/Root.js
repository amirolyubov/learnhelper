import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route } from 'react-router'
import { HashRouter, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as authActions from '../actions/auth'

import { App, Auth } from './'
import { Loader } from '../components/little'
import '../styles/index.scss'


const PrivateRoute = ({ component: Component, needRedirect, isAuthentificate, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      isAuthentificate === true
        ? <Component {...props} />
        : needRedirect
          ? <Redirect to={needRedirect} />
          : null
    )} />
  )
}

class Root extends Component {
  componentDidMount() {
    const { actions: { checkSession } } = this.props
    checkSession()
  }
  render() {
    const { auth: { isAuthentificate, isLoading }, err, actions } = this.props
    return (
      <HashRouter>
        <div>
          {
            isLoading
            ? <div className='loader-max'>
                <Loader blue />
              </div>
            : <div>
                <PrivateRoute path='/' needRedirect={'/auth'} component={App} isAuthentificate={isAuthentificate} />
                <PrivateRoute path='/auth' component={Auth} isAuthentificate={!isAuthentificate} />
              </div>
          }
        </div>
      </HashRouter>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    err: state.err
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root))
