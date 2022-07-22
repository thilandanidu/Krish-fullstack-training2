package com.thilandanidu.training.salesmanager.repository;

import java.util.List;

import com.thilandanidu.training.salesmanager.model.Employee;

public interface EmployeeRepository {

	List<Employee> getAllEmployees();

}