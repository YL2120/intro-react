import { Fragment } from "react";
import { useState } from "react";
import Checkbox from "./Checkbox";


const MainListTodo = () => {
    const initialtodos = [
      { key : 1, title : "My first todo", check : false },
      { key : 2, title : "My second todo", check : true },
      
    ];
  
    const [todos, setTodos] = useState(initialtodos);
    
     
    return (  
        <Fragment>
         {todos.map((todo) => (
      <div className="form-check" key={todo.key}>
      
          <Checkbox checks={todo.check}/>
          <label  className="form-check-label" for="flexCheckDefault">
          { todo.title }
          </label>
         
      </div>
       ))}
      </Fragment>
      
    );
        
}
 
export default MainListTodo;