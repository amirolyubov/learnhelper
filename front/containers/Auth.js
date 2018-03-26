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
  handleSignupClick() {
    const { auth, actions: { register } } = this.props
    register(auth)
  }
  handleSignoutClick() {
    const { actions: {signOut} } = this.props
    signOut()
  }
  handleGetUsersClick () {
    const { actions: { checkSession } } = this.props
    checkSession()
  }
  render() {
    const { auth: { username, email, password, logEmail, logPassword } } = this.props
    return (
      <div>
        <hr />
        <p>email</p>
        <input name='email' onChange={this.handleInputChange.bind(this)} value={email}></input>
        <p>username</p>
        <input name='username' onChange={this.handleInputChange.bind(this)} value={username}></input>
        <p>password</p>
        <input name='password' onChange={this.handleInputChange.bind(this)} value={password}></input>
        <button onClick={this.handleSignupClick.bind(this)}>sign in</button>
        <hr />
        <p>email</p>
        <input name='logEmail' onChange={this.handleInputChange.bind(this)} value={logEmail}></input>
        <p>password</p>
        <input name='logPassword' onChange={this.handleInputChange.bind(this)} value={logPassword}></input>
        <button onClick={this.handleSigninClick.bind(this)}>sign in</button>
        <hr />
        <button onClick={this.handleSignoutClick.bind(this)}>SIGN OUT</button>
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
