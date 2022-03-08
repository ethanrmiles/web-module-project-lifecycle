import React from 'react'

export default class Todo extends React.Component {
  handleClick = () => {
    this.props.handleToggle(this.props.task.id)
  }
  render() {
    const { name, completed, id} = this.props.task
    return (
      <li onClick={this.handleClick} id={id}>{name} {completed ? '✔️': '' } </li>
    )
  }
}
