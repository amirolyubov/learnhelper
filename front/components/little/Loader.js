import React, { Component } from 'react'
import cn from 'classnames'
import '../../styles/little/loader.scss'

const Loader = (props) => (
  <span className={cn("little_loader", props.blue && 'blue')}>
    <span className="little_loader-inner"></span>
  </span>
)

export default Loader
