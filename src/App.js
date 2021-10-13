import MainAddTodo from './MainAddTodo';
import Navbar from './Navbar';
import MainListTodo from './MainListTodo';


function App() {
  

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <MainAddTodo />
        <MainListTodo />
      </div>
    </div>
  );
}

export default App;
