const Checkbox = ({checks,toggleComplete,key}) => {
    
    function handeleCheckboxClick(){
        toggleComplete(key);
    }

    
    
    return (  
        <input type="checkbox" className="form-check-input" value="" id="flexCheckDefault" defaultChecked={ checks } onClick={ handeleCheckboxClick }  />
    );
}
 
export default Checkbox;