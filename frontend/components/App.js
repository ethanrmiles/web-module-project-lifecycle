import axios, { Axios } from 'axios'
import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

const URL = 'http://localhost:9000/api/todos'


const initialState = {
  toDos: [], 
  textInput:'',
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
  console.log('PARENT HANDLE ADD HAS BEEN RUN 🏃🏻‍♂️')
  console.log(this.state)
  axios.post(URL, { name: task })
  .then(res => {
    console.log('NEW TASK INCOMING 🚀')
    this.getToDos()
  })
  .catch()
}

handleToggle = (clickedId) => { //Changes the status of toDos to completed
  console.log('PARENTS HANDLE TOGGLE HAS BEEN RUN 🏃🏻‍♂️')
  console.log(clickedId)
  const patchURL = `http://localhost:9000/api/todos/${clickedId}`
  axios.patch(patchURL)
  .then(res => { 
    this.getToDos()
  })
  .catch(err => {
    console.log(err)
  })
}


handleClear = () =>{//Clears toDos that have been completed
 console.log('clear has been clicked')
 const completedToDos = () => {
   this.state.toDos.map(todo => {
     console.log(todo.id)
     const delId = todo.id
     if(todo.completed === true) {
      axios.delete(`http://localhost:9000/api/todos/${delId}`)
      .then(res => {
        this.getToDos
      })
      .catch(err => console.log(err))
     }
   })
 }
 completedToDos()
}
  render() {

    const { toDos } = this.state
    return (
      <div>
        <h1>ToDos:</h1>
        <h3>{this.state.error}</h3>
        <TodoList toDos={toDos} handleToggle={this.handleToggle}/>
        {/* {console.log('passing props to toDoList:', toDos, 'the handleToggle is: ', this.handleToggle)} */}
        <Form state={this.state} handleAdd={this.handleAdd} />
        {/* {console.log('Passing props to Form:', this.state, 'the handle add is: ', this.handleAdd)} */}
        <button onClick={this.handleClear}>Clear!</button>
      </div>
    )
  }
}
