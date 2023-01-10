import React from 'react'
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';

function ToDoList(props) {
  return (
    <div className='add-todo'>
      <h2>ToDo List</h2>
      <div className='todo-list'>        
        {props.lists.map(
          (list,index)=>
          <div className='todo-list-item mt-3 mb-3' key={index}>
            <h2>{list.text}</h2> 
            <button onClick={()=>props.dispatch(deleteTodo(list.id))}><i class="fa-solid fa-trash"></i></button>
            
          </div>            
        )}
      </div>      
    </div>
  )
}

const mapData = (state)=>({
    lists:state.todos.data
})
export default connect(mapData)(ToDoList)