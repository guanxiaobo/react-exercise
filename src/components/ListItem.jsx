import React, { Component } from 'react'

export default class ListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { todo, onClick } = this.props;
    return (
      <li onClick={onClick} style={{textDecoration: todo.completed ? 'line-through' : ''}}>{todo.text}</li>
    )
  }
}
