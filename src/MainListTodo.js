import { Fragment } from "react";

const MainListTodo = () => {
    return (  
        <Fragment>
      <div className="form-check">
          <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" />
          <label className="form-check-label" for="flexCheckDefault">
            Learn React
          </label>
      </div>
      <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
        <label className="form-check-label" for="flexCheckChecked">
        Be awesome !
        </label>
      </div>
      </Fragment>
      
    );
}
 
export default MainListTodo;