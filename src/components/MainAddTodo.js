
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const MainAddTodo = ({ addTodo }) => { // "addTodo" is the propos comming from the App.js 

    const initialtodos = [ // array of data
        { key : "", title : "", check : false },
        
      ];
    
      const [todos, setTodos] = useState(initialtodos);
    
    function  handleTitleInputChange (e) { // when user writes an title, it updates the title in the object
        setTodos({ ...todos, title: e.target.value }) // 1st param : old todo property 2nd param : new value
    } // change the value of the input box once the user writes something

    function handleSubmit(e) { // handle submit to add todo to our array
        e.preventDefault();
        if (todos.title.trim()){ //remove white space from the string and check if the input is not empty
            addTodo({ ...todos, key: uuidv4() }) // 1st param : new todo
            // resets the form with a new object that has the old properties and updates title propery with empty string
            setTodos({ ...todos, title: ""});
        }
    }

    return (  
        <form onSubmit={handleSubmit} action=""> {/* handleSubmit is fired when a user submits a form*/}
            <div className="form-group">
            <input onChange={ handleTitleInputChange} value={todos.text} name="text" type="text" className="form-control" id="TodoAdd1" aria-describedby="TodoAdd" placeholder="Type a new todo"></input> {/*value updates each time onchange function is called*/}
            </div>
            <button type="submit" className="btn btn-primary mt-2">Add Todo</button>
            <hr />
        </form>
    );
}
 
export default MainAddTodo;