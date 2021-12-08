import React from "react";
import ReactDOM from "react-dom";
// import './css/index.css'

// const name = 'JSX'
// const age = 19
// const loading = false
// const loadData = () => {
//   if(loading) {
//     return 'loading...'
//   }
//   return '加载完毕'
// }
// const songs = [
//   {id: 1, name: 'AAAAAA'},
//   {id: 2, name: 'BBBBBB'},
// ]
// const title = (
//   <div className="dv" style={{color: 'red', border: '1px solid blue', backgroundColor: 'skyblue'}}>
//     <h1>Hello {name}, 年龄： {age}</h1>
//     <p>{3>5? '大于':'小于等于'}</p>
//     <p>
//       条件渲染：
//       {loadData()}
//     </p>
    
//     列表渲染：
//     <ul>
//       {songs.map(item => <li key={item.id}>{item.name}</li>)}
//     </ul>
//   </div>
// );

// 组件模块
// 函数组件及绑定事件
// function Hello() {
//   function handleClick () {
//     console.log('函数组件点了按钮')
//   }
//   return (
//     <button onClick={handleClick}>函数组件按钮</button>
//   )
// }
// const Hello = () => <div>这是我的第一个函数组件</div>

//类组件
// class Hello extends React.Component{
//   render() {
//     return (
//       <div>这是我的第一个类组件</div>
//     )
//   }
// }
// 导入组件
// import Hello from "./components/index.js";
import Comment from "./components/comment.js"; // 发表评论demo
ReactDOM.render(<Comment/>, document.getElementById("root"));
