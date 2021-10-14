import MainAddTodo from './components/MainAddTodo';
import Navbar from './components/Navbar';
import MainListTodo from './components/MainListTodo';


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
