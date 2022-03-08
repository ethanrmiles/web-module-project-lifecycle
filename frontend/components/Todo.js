import React from 'react'

export default class Todo extends React.Component {
  render() {
    const { name, completed, id} = this.props.task
    return (
      <li key={id}>{name} {completed ? '✔️': '' } </li>
    )
  }
}
