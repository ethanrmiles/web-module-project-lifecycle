import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            type ='text'
            id='textInput'
            placeholder='Type your tasks'
            // onChange={}
            />
            <input 
            type='submit'
            // onClick={}
            />
        </form>
      </div>
    )
  }
}
