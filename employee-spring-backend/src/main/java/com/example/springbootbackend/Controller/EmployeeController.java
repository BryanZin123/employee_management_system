package com.example.springbootbackend.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import com.example.springbootbackend.Model.Employee;
import com.example.springbootbackend.Repository.EmployeeRepository;
import com.example.springbootbackend.Exception.ResourceNotFoundException;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1")

public class EmployeeController {
	
	
	@Autowired
	private EmployeeRepository employeeRepository;

	
	@GetMapping("/employee")
	public List<Employee> getAllEmployees()
	{
		return employeeRepository.findAll();
	}
	
	
	@GetMapping("/employee/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
        return ResponseEntity.ok(employee);
    }

	
	@PostMapping("/employee")
	public Employee createEmployee(@RequestBody Employee employee) 
	{
		return employeeRepository.save(employee);
	}
	
	@PutMapping("/employee/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails){
		Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with id: " + id));
				employee.setFirstName(employeeDetails.getFirstName());
				employee.setLastName(employeeDetails.getLastName());
				employee.setEmailId(employeeDetails.getEmailId());
				
				Employee updateEmployee = employeeRepository.save(employee);
				return ResponseEntity.ok(updateEmployee);
				}
	
	@DeleteMapping("/employee/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		employeeRepository.delete(employee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
		}

	
}
