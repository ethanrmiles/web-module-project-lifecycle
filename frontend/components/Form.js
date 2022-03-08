import React from 'react'

export default class Form extends React.Component {
  
  state = this.props.state
  
  addToDo = (evt) => {
    evt.preventDefault()
    console.log('submit button clicked! 🧑🏼‍💻')
    this.props.handleAdd(this.state.input)
    
  }

  handleChange = (evt) => {
    const { value } = evt.target
    this.setState({
      ...this.state, 
      input: value
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type ='text'
            id='textInput'
            placeholder='Type your tasks'
            onChange={this.handleChange}
            />
            <input 
            type='submit'
            onClick={this.addToDo}
            />
        </form>
      </div>
    )
  }
}
