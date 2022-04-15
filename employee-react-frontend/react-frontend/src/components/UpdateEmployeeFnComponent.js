import React, { useState,useEffect } from 'react';
import EmployeeService from '../EmployeeService'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'


function UpdateEmployeeFnComponent(props) {
    let navigate = useNavigate();

    const { id } = useParams();
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");

    
    useEffect(function () {
        EmployeeService.getEmployeeById(id)
        .then((response) => {setFirstname(response.data.firstName);
                            setLastname(response.data.lastName);
                            setEmail(response.data.emailId)})
        .then((error) => console.log(error));        
    }, []);

 


    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = { firstName: firstName, lastName: lastName, emailId: email };  

        EmployeeService.updateEmployee(employee,id).then(res => {            
            navigate('/employee');
        });
         console.log(employee);
        console.log('employee => ' + JSON.stringify(employee)); 
    }

    const changeFirstNameHandler = (event) => {
        setFirstname(event.target.value);
        console.log(event.target.value)
    }

    const changeLastNameHandler = (event) => {
        setLastname(event.target.value);
        console.log(event.target.value)

    }

    const changeEmailHandler = (event) => {
        setEmail(event.target.value);        
    }

    const cancel= () => {        
        navigate('/employee');
    }

    return (
        <div>
              <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Employee</h3>
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
                                        <input placeholder="Email Address" name="email" className="form-control"
                                        value={email} onChange={changeEmailHandler} />
                                    </div><br></br>
                                    <button className="btn btn-success" onClick={saveOrUpdateEmployee}>Update</button>
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

export default UpdateEmployeeFnComponent;