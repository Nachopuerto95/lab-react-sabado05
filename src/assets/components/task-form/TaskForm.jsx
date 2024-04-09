import React from 'react'
import { useState } from 'react';
import './TaskForm.css'

function TaskForm({ onCreate }) {

const [state, setState] = useState({text: '', isImportant: false});

const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(state);
}

const handleCheckBox = (event) => {
    setState({...state, isImportant: event.target.checked} )
}


const handleChange =(event) => {
    const { name, value } = event.currentTarget;
    setState({
        ...state,
        [name]: value
    })
    
}  

  return ( 
    <div className='TaskForm'>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-1">
            <label><i className="bi bi-list-task"></i></label>    
            <input onChange={handleChange} type='text' name='text' value={state.text}/>
            <div className='d-flex justify-content-center align-items-center gap-2 '>
              <input type="checkbox" name='isImportant' checked={state.isImportant}  onChange={handleCheckBox} value={state.isImportant}/>
              <label><i className="fas fa-exclamation-triangle"></i></label>
            </div>
            <button><i className="bi bi-plus-lg"></i></button>
          </div>
        </form>
    </div>
  )
}

TaskForm.defaultProps = {
  onCreate: () => {}
}

export default TaskForm

/*
submit
<i class="bi bi-plus-lg"></i>

<div className="input-group mb-1">

value={event.title}

   
      const handleChange =(e) => {
        const { name, value } = e.currentTarget;
        setEvent({
            ...event,
            [name]: value
        })
    }  

*/