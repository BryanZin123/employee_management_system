import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../EmployeeService';

export default function ViewEmployeeFnComponent() {

    let navigate = useNavigate();

    const [employee, setEmployee] = useState([]);

    const { id } = useParams();

    useEffect(function () {   
         EmployeeService.getEmployeeById(id)
            .then((response) => setEmployee(response.data))
            .then((error) => console.log(error));
    });

    const viewEmployee = (id) => {
        navigate(`/view-employee/${id}`);
        console.log("this is connected");
        
    }

    const cancel = () => {
        navigate('/employee');
    }

    return (
        <div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th> Employee First Name</th>
                        <th> Employee Last Name</th>
                        <th> Employee Email Id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        <tr key={employee.id}>
                            <td> {employee.firstName} </td>
                            <td> {employee.lastName}</td>
                            <td> {employee.emailId}</td>
                        </tr>
                    }
                </tbody>
            </table>

            <button className="btn btn-danger" onClick={cancel}>Cancel</button>
            <button style={{ marginLeft: "10px" }} onClick={() => viewEmployee(employee.id)} className="btn btn-info">View </button>

        </div>
    );
}

