import { Fragment } from "react";
import { useState } from "react";


const MainListTodo = () => {
    const initialtodos = [
      { title : "My first todo", check : false },
      { title : "My second todo", check : true },
    ];
  
    const [todos, setTodos] = useState(initialtodos);
    
     
    return (  
        <Fragment>
         {todos.map((todo) => (
      <div className="form-check">
      
      <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" checked={ todo.check } />
          <label className="form-check-label" for="flexCheckDefault">
          { todo.title }
          </label>
         
      </div>
       ))}
      </Fragment>
      
    );
        
}
 
export default MainListTodo;