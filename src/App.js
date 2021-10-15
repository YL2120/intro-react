import MainAddTodo from './components/MainAddTodo';
import Navbar from './components/Navbar';
import MainListTodo from './components/MainListTodo';
import { useEffect, useState } from 'react';

const LOCAL_STORAGE_KEY = "react-todo-list-todos"; //store the todos

function App() {
  const [todos, setTodos] = useState([]); 

  useEffect(() => { //populates the todos when the app initially renders
      const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if(storageTodos){ //if storagetodos isn't null
        setTodos(storageTodos);
      }
  },[]); //1st param: get the todos from the local storage        2nd param: empty dependecy array

  useEffect (() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  },[todos]); //1st param : function which is the effect 2nd param : dependecy array that determines if the effect is fired up or not
  

  

  function addTodo(todo) {  //add new todo to our array
    setTodos([todo, ...todos])//"...todos" old todo array list
    //1st param : new array 2nd param : old todo array spreads over it
  }

  function toggleComplete(key){ //takes the key of a todo
    setTodos(
      todos.map(todo => {

        if(todo.key === key){
          return {
            ...todo,
            check: !todo.check //returns new object with the check property neglected (false becomes true and true becomes false)
          };

        }
        return todo;
      })
    );
  }

  function removeTodo (key){ //delete a todo
    setTodos(todos.filter(todo => todo.key !== key )) //keeps the id if it's not the one I want to delete
  }

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <MainAddTodo addTodo={addTodo} /> {/* pass our todoadd function as a props to the form */}
        <MainListTodo todos={todos} 
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
         />
      </div>
    </div>
  );
}

export default App;

