import React, { Component } from 'react';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      filter: 'all'
    }

    this.itemId = 0;
  }
  render() {
    const { fitler } = this.state;
    const todos = this.filterTodos();
    return (
      <div>
        <AddTodo addTodoItem={this.addTodoItem}></AddTodo>
        <TodoList todos={todos} changeTodoItemStatus={this.changeTodoItemStatus}></TodoList>
        <Footer filter={this.state.filter} changeFilterStatus={this.changeFilterStatus}></Footer>
      </div>
    )
  }

  addTodoItem = text => {
    this.itemId++;
    let obj = {
      text: text,
      id: this.itemId,
      completed: false
    }

    let item = [...this.state.todos, obj];

    this.setState({
      todos: item
    });
  }

  changeFilterStatus = filter => {
    this.setState({
      filter: filter
    })
  }

  filterTodos() {
    const filterStatus = this.state.filter;
    return this.state.todos.filter((item) => {
      if (filterStatus === 'active') {
        return !item.completed;
      } else if (filterStatus === 'completed') {
        return item.completed;
      } else {
        return true;
      }
    })
  }

  changeTodoItemStatus = (id) => {
    let todos = this.state.todos.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }

      return item;
    })

    this.setState({
      todos: todos
    });
  }
}
