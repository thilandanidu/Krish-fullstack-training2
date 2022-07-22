import { Component, OnInit } from '@angular/core';
import employees from './data/employees.json';
import { Employee } from './Employees.model';

@Component({
  selector: 'em-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  title:string='Emplyee mangement Solution'
  employees: Employee[] = employees;
  showIcon:boolean =false;
  private _designationFilter:string ='';
  filteredEmployees:Employee[] = employees;
  message:string = ''

  set designationFilter(value:string){
    this._designationFilter = value;
  }

  get designationFilter():string{
    return this._designationFilter;
  }

  constructor() { }

  ngOnInit(): void {
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
