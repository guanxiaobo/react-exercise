import React, { Component } from 'react';

import ListItem from './ListItem';

export default class TodoList extends Component {
  constructor(porps) {
    super(porps);
  }
  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map((item) => {
          return <ListItem todo={item} key={item.id} onClick={() => {this.props.changeTodoItemStatus(item.id)}}></ListItem>
        })}
      </ul>
    )
  }
}
