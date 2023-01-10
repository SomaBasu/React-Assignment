import './App.css';
import AddTodo from './components/AddTodo';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="container">
        <h1>Todo assessment</h1>
        <div className="row mt-3 mb-3 d-flex justify-content-between">
          <div className="col-md-3 todo-card">
            <AddTodo/>
          </div>
          <div className="col-md-2 todo-card">
            <ToDoList/>
          </div>
          <div className="col-md-2 todo-card">
            
          </div>
          <div className="col-md-2 todo-card">
            
          </div>
          <div className="col-md-2 todo-card">
            
          </div>
        </div>
        
    </div>
  );
}

export default App;
