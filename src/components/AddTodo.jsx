import React from 'react'
import { connect } from 'react-redux';
import { addTodo } from '../actions';

function AddTodo(props) {  
  return (
    <div className='add-todo'>
      <h2>Add ToDo</h2>
      <form onSubmit={(event)=>{
        event.preventDefault();
        
        let name = event.target.name.value;
        let desc = event.target.description.value;
        let status = event.target.status.value;
        
        props.dispatch(addTodo(name, desc, status ));      
    }}>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" name='name' />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" name="description" rows="3"></textarea>
        </div>
        <div className="mb-3">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="status" value="completed"/>
            <label className="form-check-label radio-inline" htmlFor="status">
              Completed
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="status" value="pending" />
            <label className="form-check-label radio-inline" htmlFor="status">
            Pending
            </label>
          </div>
        </div>
        <div className="mb-3 text-center">
          <button className="btn btn-primary btn-sm mb-3">Save</button>
        </div>
      </form>
    </div>
  )
}

export default connect()(AddTodo);