// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import Todo from './components/Todo';

function App() {
  // Below array destructure syntax is equivalent to:
  // const newTodoStateArr = useState("");
  // const newTodo = newTodoStateArr[0];
  // const setNewTodo = newTodoStateArr[1];
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();

    if(newTodo.length === 0) {
      return;
    }
   const todoItem = {
     text: newTodo,
     complete: false
   }


    setTodos([...todos, todoItem]); // this will update the emply array when add is clicked on the form
    setNewTodo("") // this will clear the input box once add is clicked and has to add value in input field on the form.
  };
  const handleTodoDelete = (delIdx) => {
    const filetedTodos = todos.filter((_todo,i) => {
      return i !== delIdx; // true to keep and false to remove
    })
      setTodos(filetedTodos)
  }

  const handleToggleComplete= (delIdx) => {
    const updatedTodos = todos.map((todo, i)=>{
      if(delIdx === i){
        todo.complete = !todo.complete;
        // To avoid mutating the todo directly, do this:
        // const updatedTodos = {
        //   ...todo, complete: !todo.complete
        // }; return updatedTodos;

      }

      return todo;
    })
    setTodos(updatedTodos);
  }
  return (
    <div style ={{textAlign: 'center'}} >
      <form onSubmit={(event)=> {
        handleNewTodoSubmit(event);
      }}>
        <input onChange = {(event) => {
          setNewTodo(event.target.value);
        }} type="text"
        value={newTodo}
        />
        <div>
          <button className="btn btn-primary mt-3 float flex-end">Add</button>
        </div>
      </form>
      <hr />
      {
        todos.map((todo, i) => {

          return (
            <Todo
              key = {i}
              i= {i}
              todo={todo}
              handleToggleComplete = {handleToggleComplete}
              handleTodoDelete = {handleTodoDelete}
          />
          )
        })}

    </div>
  );
}

export default App;
