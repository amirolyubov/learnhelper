import React, { Component } from 'react'
import { TwitterPicker } from 'react-color'
import '../../styles/little/color.scss'

const Color = () => {
  return (
    <div className='little_color'>
      <h3>Цвет</h3>
      <div className='picker_wrapper'>
        <TwitterPicker
          triangle={'hide'}
          />
      </div>
    </div>
  )
}

export default Color
