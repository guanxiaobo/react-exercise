import React, { Component } from 'react'

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { filter } = this.props;
    return (
      <div>
        <span>show:</span>
        {
          ['all','active','completed'].map((item, index) => {
            return <button disabled={ filter === item ? true : false } key={index} onClick={() => {this.filter(item)}}>{item}</button>
          })
        }
      </div>
    )
  }

  filter = (item) => {
    this.props.changeFilterStatus(item);
  }
}
