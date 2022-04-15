import React, { useState } from 'react';
import EmployeeService from '../EmployeeService'
import { useNavigate } from 'react-router-dom'

function CreateEmployeeFnComponent(props) {
    let navigate = useNavigate();

    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const changeFirstNameHandler = (event) => {
        setFirstname(event.target.value);
    }

    const changeLastNameHandler = (event) => {
        setLastname(event.target.value);
        console.log(event.target.value);
    }

    const changeEmailHandler = (event) => {
        setEmail(event.target.value);        
    }

    const cancel= () => {        
        navigate('/employee');
    }
    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        console.log(email)
        let employee = { firstName: firstName, lastName: lastName, emailId: email };  
        console.log('employee => ' + JSON.stringify(employee)); 
        EmployeeService.createEmployee(employee).then(res => {            
            navigate('/employee');
        });
    }

    return (
        <div>
              <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card-body">
                                <form>
                                <div className="form-group">
                                        <label> First Name: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                            value={firstName} onChange={changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Last Name: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                            value={lastName} onChange={changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Email Id: </label>
                                        <input placeholder="Email Address" name="email" className="form-control"value={email} onChange={changeEmailHandler} />
                                    </div><br></br>
                                    <button className="btn btn-success" onClick={saveOrUpdateEmployee}>Save</button>
                                    <button className="btn btn-danger" 
                                        onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>          
        </div>
    );
}

export default CreateEmployeeFnComponent;
