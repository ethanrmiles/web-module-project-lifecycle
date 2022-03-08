import axios, { Axios } from 'axios'
import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

const URL = 'http://localhost:9000/api/todos'


const initialState = {
  toDos: [], 
  form: {textInput:''},
  error: ''
}

export default class App extends React.Component {
  
  state= initialState

  componentDidMount(){
    this.getToDos()
    console.log('ran getToDos()')
  }

  //Helpers

getToDos = () => { //Gets  toDos from the API
  axios.get(URL)
  .then(res => {
    this.setState({
      ...this.state, toDos: res.data.data
    })
  })
  .catch(err => {
    this.setState({
      ...this.state, error: err.response.data.message
    })
  })
}

handleAdd = (task) => { //Adds new toDos to the server 
  
}

handleToggle = (clickedId) => { //Changes the status of toDos to completed
  
}


handleClear = () =>{//Clears toDos that have been completed
 
}

  render() {

    const { toDos } = this.state

    return (
      <div>
        <h1>ToDos:</h1>
        <h3>{this.state.error}</h3>
        <TodoList toDos={toDos}/>
        {console.log('passing props:', toDos)}
        <Form />
        <button>Clear!</button>
      </div>
    )
  }
}
