import { Fragment } from "react";
import { useState } from "react";
import Checkbox from "./Checkbox";


const MainListTodo = ({ todos, toggleComplete, removeTodo }) => {
    // const initialtodos = [
    //   { key : 1, title : "My first todo", check : false },
    //   { key : 2, title : "My second todo", check : true },
      
    // ];
  
    // const [todos, setTodos] = useState(initialtodos);

    function handleRemoveClick(number){
        removeTodo(number);
    }
    
     
    return (  
        <Fragment>
         {todos.map((todo) => (
      <div className="form-check" key={todo.key} >
      
          <Checkbox checks={todo.check} toggleComplete={toggleComplete} key={todo.key} removeTodo={removeTodo}/>
          <label  className="form-check-label mr-5" for="flexCheckDefault">
          { todo.title }
          </label>
        <button type="button" className="btn btn-danger btn-sm" onClick={() => handleRemoveClick(todo.key)}>Remove</button> {/* if a parameter is needed in the function on click, use ()=>nameoffunction(param) */}
      </div>
       ))}
      </Fragment>
      
    );
        
}
 
export default MainListTodo;