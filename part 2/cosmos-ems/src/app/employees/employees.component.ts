import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployeeService } from './employee.service';
//import employees from './data/employees.json';
import { Employee } from './Employees.model';

@Component({
  selector: 'em-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit ,OnDestroy{

  title:string='Emplyee mangement Solution'
  //employees: Employee[] = employees;
  employees!: Employee[];
  showIcon:boolean =false;
  private _designationFilter:string ='';
  //filteredEmployees:Employee[] = employees;
  filteredEmployees !:Employee[] ;
  message:string = '';
  //to unsbcribe
  subcribe!: Subscription

  set designationFilter(value:string){
    this._designationFilter = value;
  }

  get designationFilter():string{
    return this._designationFilter;
  }

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {

   this.subcribe= this.employeeService.getEmployees().subscribe({
      next:data =>{
        this.filteredEmployees = data;
        this.employees = this.filteredEmployees
      }
    })
  }

  ngOnDestroy(){
    this.subcribe.unsubscribe();
  }

  toggleIcon(){
    this.showIcon =! this.showIcon;
  }

  filterByDesignation(){
    this.filteredEmployees = this.employees.filter(employee => employee.designation.includes(this.designationFilter))
  }

  onMessageRecived(value:string){
    this.message = value;
  }

}
