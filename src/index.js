import React from "react";
import ReactDOM from "react-dom";
import './css/index.css'

const name = 'JSX'
const age = 19
const loading = false
const loadData = () => {
  if(loading) {
    return 'loading...'
  }
  return '加载完毕'
}
const songs = [
  {id: 1, name: 'AAAAAA'},
  {id: 2, name: 'BBBBBB'},
]
const title = (
  <div className="dv" style={{color: 'red', border: '1px solid blue', backgroundColor: 'skyblue'}}>
    <h1>Hello {name}, 年龄： {age}</h1>
    <p>{3>5? '大于':'小于等于'}</p>
    <p>
      条件渲染：
      {loadData()}
    </p>
    
    列表渲染：
    <ul>
      {songs.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  </div>
);

ReactDOM.render(title, document.getElementById("root"));
