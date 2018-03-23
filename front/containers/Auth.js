import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'

import * as authActions from '../actions/auth'

class Auth extends Component {
  handleInputChange(e) {
    const { actions: {updateField} } = this.props
    updateField(e.target.name, e.target.value)
  }
  handleSigninClick() {
    const { auth, actions: { signIn } } = this.props
    signIn(auth)
  }
  render() {
    const { auth: { username, email, password, logEmail, logPassword } } = this.props
    return (
      <div>
        <p>email</p>
        <input name='logEmail' onChange={this.handleInputChange.bind(this)} value={logEmail}></input>
        <p>password</p>
        <input name='logPassword' onChange={this.handleInputChange.bind(this)} value={logPassword}></input>
        <button onClick={this.handleSigninClick.bind(this)}>sign in</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth))
