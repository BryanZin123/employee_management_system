import React, { useState, useEffect } from "react";
import EmployeeService from "../EmployeeService";
import { useNavigate } from "react-router-dom";


function ListFnEmployeeComponent(props) {
  const [employee, setEmployee] = useState([]);
  let navigate = useNavigate();

  useEffect(function () {
    EmployeeService.getEmployees()
      .then((response) => setEmployee(response.data))
      .then((error) => console.log(error));
  }, []);

  const addEmployee = () => {
    navigate("/add-employee");
  };

  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id).then((res) =>
      setEmployee(employee.filter((employee) => employee.id !== id))
    );
  };

  const editEmployee = (id) => {
    navigate(`/update-employee/${id}`);
    console.log(id);
  };

  const viewEmployee = (id) => {
    navigate(`/view-employee/${id}`);
  };

  return (
   <div>
      <div className="d-flex justify-content-between p-2">
        <div>
          <h2 className="text-center">Employee List</h2>
        </div>
        <div>
          <button onClick={addEmployee} className="btn btn-primary">
            Add Employee
          </button>
        </div>
      </div>
      <br></br>

    
       


        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Employee First Name</th>
      <th scope="col">Employee Last Name</th>
      <th scope="col">Employee Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

  {employee.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td>
                  <button
                    onClick={() => editEmployee(employee.id)}
                    className="btn btn-info"
                  >
                    update
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => deleteEmployee(employee.id)}
                    className="btn btn-danger"
                  >
                    delete
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => viewEmployee(employee.id)}
                    className="btn btn-info"
                  >
                    view
                  </button>
                </td>
              </tr>
            ))}

  </tbody>
</table>
      </div>
 
  );
}

export default ListFnEmployeeComponent;
