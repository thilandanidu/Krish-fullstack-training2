package com.thilandanidu.training.salesmanager.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;

import com.thilandanidu.training.salesmanager.model.*;

@Repository("you-can-use-anyname")
public class HibernateEmployeeRepositoryImpl implements EmployeeRepository {

	@Value("${name}")
	private String employeeName;
	@Value("${city}")
	private String employeeCity;
	
	public List<Employee> getAllEmployees(){
	List<Employee> employees = new ArrayList<>();
	
	Employee employee = new Employee();
	
	employee.setEmployeeName(employeeName);
	employee.setEmployeeLocation(employeeCity);
	employees.add(employee);
	return employees;
	}
	
	
	
	
	
}
