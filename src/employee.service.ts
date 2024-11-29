import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private EmployeeList:any[]=[];

  constructor() { }


  public showmsg(){
    console.log("showmsg is called");
  }

 public  saveEmployee(Employee:any)
  {
    this.EmployeeList.push(Employee);

  }

 public  getEmployees():any[]{
    return this.EmployeeList;
  }



}
