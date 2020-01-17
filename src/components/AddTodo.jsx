import React, { Component } from 'react';

export default class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
  }
  render() {
    const text = this.state.text;
    return (
      <div>
        <input type="text" value={text} onChange={this.changeText}/>
        <button onClick={this.add}>Add</button>
      </div>
    )
  }

  changeText = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  add = () => {
    this.props.addTodoItem(this.state.text);
  }
}
