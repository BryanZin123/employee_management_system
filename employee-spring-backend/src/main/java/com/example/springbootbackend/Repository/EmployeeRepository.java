package com.example.springbootbackend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springbootbackend.Model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
