import React from "react";
import ReactDOM from "react-dom";
import img from "./images/cat.jpeg";
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
// import Comment from "./components/comment.js"; // 发表评论demo
// import Parent from "./components/parent.js"; // 发表评论demo
// ReactDOM.render(<Parent/>, document.getElementById("root"));

import Mouse from "./components/mouse.js"; // render props模式
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>render props 模式</h1>
        <Mouse>
          {(mouse) => {
            return (
              <p>
                鼠标位置：{mouse.x}, {mouse.y}
              </p>
            );
          }}
        </Mouse>
        <Mouse>
          {(mouse) => {
            return (
              <img
                src={img}
                alt="猫"
                style={{
                  width: "128px",
                  height: "128px",
                  position: "absolute",
                  top: mouse.y - 64,
                  left: mouse.x - 64,
                }}
              />
            );
          }}
        </Mouse>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
