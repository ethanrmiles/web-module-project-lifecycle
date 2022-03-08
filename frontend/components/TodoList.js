import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.toDos.map((todo => {
            return (<Todo task={todo} key={this.id} />)
          }))
        }
      </ul>
    )
  }
}
