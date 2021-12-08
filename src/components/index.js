import React from "react";

// 创建组件
class Hello extends React.Component {
  handleClick(e) {
    e.preventDefault(); // 阻止事件跳转
    console.log("点了");
  }
  constructor() {
    super()
    // 原来的写法
    this.state ={
      count: 0
    }
    // bind方式
    this.onIncrement = this.onIncrement.bind(this)
  }
  // 简写
  // state ={
  //   count: 0,
  //   test: 'a'
  // }
  
  // 事件处理程序
  // 抽离到单独的方法中时，this指向是undefined
  // 希望this指向组件实例
  // 处理方法： 
  // 1. 利用箭头函数（特点：自身是不绑定this的，箭头函数中的this是指向外部环境的，此处为render）
  // 2. 利用Function.prototype.bind()方法，将事件处理程序中的this与组件实例绑定到一起
  // 3. onIncrement = () => {}
  onIncrement() {
    this.setState({
      count: this.state.count +1
    })
  }
  render() {
    return (
      <div>
        <h1>计数器：{this.state.count}</h1>
        {/* <button onClick={this.onIncrement}>+1</button>  bind方式 */}
        {/* <button onClick={() => this.onIncrement()}>+1</button> 箭头函数方式 */}
        {/* <div>这是我的第一个抽离到独立JS的组件</div>
        <button onClick={this.handleClick}>按钮</button>
        <a href="http://www.baidu.com.cn/" onClick={this.handleClick}>a标签</a>
        <h1>计数器：{this.state.count}</h1>
        <button onClick={()=>{
          this.setState({
            count: this.state.count +1
          })
        }}>+1</button> */}
      </div>
    );
  }
}
// 导出组件
export default Hello;
