import React, { Component } from 'react'
import cn from 'classnames'
import '../../styles/little/scroll.scss'

class ScrollContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scrollY: 0,
      scrollValue: 0,
      contHeight: 0,
      scrollContHeight: 0,
      elementId: `cont_${Math.random().toString().substring(2,8)}`,
      rectId: `rect_${Math.random().toString().substring(2,8)}`,
      isScrollDrag: false
    }
  }

  componentDidMount() {
    const { elementId } = this.state
    this.setState({
      contHeight: document.getElementById(elementId).firstChild.offsetHeight,
      scrollContHeight: document.getElementById(elementId).offsetHeight
    })
  }
  calcRectHeight() {
    const { contHeight, scrollContHeight } = this.state
    return `${(Math.round((scrollContHeight * 100) / contHeight)) || 0}%`
  }

  handleMouseDown(e, synth_move_event) {
    const startY = e.clientY,
          prevScrollY = this.state.scrollY,
          cont = document.getElementById(this.state.elementId),
          rect = document.getElementById(this.state.rectId)

    this.setState({ isScrollDrag: true })

    document.onmousemove = move_event => {
      (
        this.state.scrollY >= 0 &&
        cont.offsetHeight - Math.round(rect.height.baseVal.value) - rect.y.baseVal.value >= 0
      ) &&
      this.setState({
        scrollY: (prevScrollY + (move_event.clientY - startY) > 1
                 && prevScrollY + (move_event.clientY - startY) < cont.offsetHeight - Math.round(rect.height.baseVal.value) - 1)
                  ? prevScrollY + (move_event.clientY - startY)
                  : Math.round(cont.offsetHeight - rect.height.baseVal.value) - rect.y.baseVal.value > 20
                    ? 1
                    : Math.round(cont.offsetHeight - rect.height.baseVal.value),
        scrollValue: rect.y.baseVal.value
      })
      cont.scrollTop = this.state.scrollValue
    }
    window.onmouseup = () => {
      this.setState({ isScrollDrag: false })
      document.onmousemove = null
      window.onmouseup = null
    }
  }

  render() {
    const { children, heightAmends } = this.props
    const { scrollY, elementId, rectId, isScrollDrag, scrollContHeight, contHeight } = this.state

    return (
      <div className='scroll_wrapper' style={{ height: `calc(100% - ${heightAmends})` }}>
        <div
          className='scroll_area'
          id={elementId}
          >
          { children }
        </div>
        {
          scrollContHeight <= contHeight
          &&  <svg>
                <rect
                  id={rectId}
                  width='100%'
                  height={this.calcRectHeight()}
                  rx='5'
                  ry='5'
                  y={scrollY}
                  opacity={isScrollDrag ? '0.4' : '0.1'}
                  onMouseDown={this.handleMouseDown.bind(this)}
                  />
              </svg>
          }
      </div>
    )
  }
}

export default ScrollContainer
