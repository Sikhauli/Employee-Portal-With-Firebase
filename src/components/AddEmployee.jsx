import React from "react";
import './AddEmp.css';


const AddEmployee = ({ setName, setLastname, setEmail, addEmployee}) => {

    
    return (
        <div className="AddEmployee">
            <h1>Add employee</h1>
                <input type="text" placeholder="Name" id="name" onChange={e => setName(e.target.value)} />
                <input type="text" placeholder="Lastname" id="lastname" onChange={e => setLastname(e.target.value)} />
                <input type="text" placeholder="Email" id="email" onChange={e => setEmail(e.target.value)} />
            <button onClick={addEmployee}>Add Employee</button>
        </div>
    )
}

export default AddEmployee;
