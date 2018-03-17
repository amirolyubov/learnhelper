import React, { Component } from 'react'
import { TwitterPicker } from 'react-color'
import '../../styles/little/color.scss'

const Color = props => {

  return (
    <div className='little_color'>
      <h3>Цвет</h3>
      <div className='picker_wrapper'>
        <TwitterPicker
          triangle={'hide'}
          color={props.color}
          onChange={props.onChange}
          />
        <div className='color_preview' style={{ background: props.color }}></div>
      </div>
    </div>
  )
}

export default Color
