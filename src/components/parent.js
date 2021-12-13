import React from "react";

class Counter extends React.Component {
  state = {
    count: 0,
  };
  onIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div>
        <Child1 count={this.state.count}></Child1>
        <Child2 onIncrement={this.onIncrement}></Child2>
      </div>
    );
  }
}

const Child1 = (props) => {
  return <h1>计数器：{props.count}</h1>;
};

const Child2 = (props) => {
  return <button onClick={() => props.onIncrement()}>+1</button>;
};
// 子组件（函数组件）
// const Child = props => {
//     console.log('子组件：', props);
//     return (
//         <div>
//             <p>子组件，接收到父组件的数据： {props.name}</p>
//         </div>
//     )
// }

export default Counter;
