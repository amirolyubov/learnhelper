import React, { Component } from 'react'
import '../styles/header.scss'

class Header extends Component {
  handleSignoutClick() {
    const { handleSignout } = this.props
    handleSignout()
  }
  render() {
    const {} = this.props
    return (
      <div className='header'>
        <span>ЛЁРНХЕЛПЕР</span>
        <div className='controls'>
          <span>amirolyubov</span>
          <div className='menuButton'>
            <div className='menu'>
              <span>help</span>
              <span>Settings</span>
              <span onClick={this.handleSignoutClick.bind(this)}>Sign out</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
