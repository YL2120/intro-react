

const MainAddTodo = () => {
    return (  
        <form action="">
            <div className="form-group">
            <input type="text" className="form-control" id="TodoAdd1" aria-describedby="TodoAdd" placeholder="Type a new todo"></input>
            </div>
            <button type="submit" className="btn btn-primary mt-2">Add Todo</button>
            <hr />
        </form>
    );
}
 
export default MainAddTodo;