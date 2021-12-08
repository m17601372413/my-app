import React from "react";

class Comment extends React.Component {
  state = {
    comments: [],
    userName: "",
    userContent: "",
  }

  renderList() {
    return this.state.comments.length === 0 ? (
      <div style={{ textAlign: "center" }}>暂无评论</div>
    ) : (
      <ul>
        {
          this.state.comments.map((item) => (
            <li key={item.id}>
              <h3>评论人：{item.name}</h3>
              <p>评论内容：{item.content}</p>
            </li>
          ))
        }
      </ul>
    )
  }
  // 获取评论信息
  handleForm = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  addComment = () => {
    const { comments, userName, userContent } = this.state;
    if (!userName.trim() || !userContent.trim()) {
      alert('请输入评论人和评论内容')
      return
    }
    const newComments = [
      {
        id: Math.random(),
        name: userName,
        content: userContent,
      },
      ...comments,
    ];
    this.setState({
      comments: newComments,
      userName: '',
      userContent: ''
    });
    console.log(comments)
  };
  render() {
    const { userName, userContent } = this.state;
    return (
      <div className="app" style={{ width: "500px", margin: "0px auto" }}>
        <div>
          <div>
            姓名：
            <input
              type="text"
              name="userName"
              value={userName}
              placeholder="请输入评论人姓名"
              onChange={this.handleForm}
            />
          </div>
          <br />
          <div>
            内容：
            <textarea
              name="userContent"
              value={userContent}
              cols="30"
              rows="10"
              placeholder="请输入评论内容"
              onChange={this.handleForm}
            />
          </div>
          <br />
          <button style={{ textAlign: "right" }} onClick={this.addComment}>
            发表评论
          </button>
        </div>

        {this.state.comments.length === 0 ? (
          <div style={{ textAlign: "center" }}>暂无评论</div>
        ) : (
          <ul>{this.renderList()}</ul>
        )}
      </div>
    );
  }
}

export default Comment;
