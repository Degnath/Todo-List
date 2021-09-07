import React from 'react';


const Todo = (props) => {
    const todoClasses = ["bold", "italic"];

    if(props.todo.complete) {
      todoClasses.push('line-through');

    }

        return (
            <div>
              <input onChange = {(event)=> {
                props.handleToggleComplete(props.i);
              }} checked ={props.todo.complete} type="checkbox" />

              <span className= {todoClasses.join(" ")}>{props.todo.text}</span>

              <button className="btn btn-success" onClick = {(event) => {
                props.handleTodoDelete(props.i);
              }}
              style={{marginLeft: '10px'}}
              > Delete</button>
            </div>
        );

};



export default Todo;