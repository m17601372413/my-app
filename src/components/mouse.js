import React from "react";
import propTypes from 'prop-types'
class Mouse extends React.Component{
  state = {
    x: 0,
    y: 0
  }

  handleMouseMove = e => {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }
  // 监听鼠标移动事件
  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove)
  }
  // 组件卸载时清除监听器
  componentWillUnmount () {
    window.removeEventListener("mousemove", this.handleMouseMove)
  }
  render() {
    return this.props.children(this.state)
  }
}
Mouse.propTypes = {
  children: propTypes.func.isRequired
}
export default Mouse;