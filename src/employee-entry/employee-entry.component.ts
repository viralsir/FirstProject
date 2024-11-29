import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {EmployeeService} from '../employee.service';
import {EmployeeComponent} from '../employee/employee.component';

@Component({
  selector: 'app-employee-entry',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './employee-entry.component.html',
  styleUrl: './employee-entry.component.css'
})
export class EmployeeEntryComponent
{

  employeservice:EmployeeService=Inject("EmployeeService");
  //constructor(employeeservice:EmployeeService) {
 // }

  EmployeeForm=new FormGroup({
    id:new FormControl("",[Validators.required]),
    name:new FormControl("",[Validators.required]),
    salary:new FormControl("",[Validators.required,Validators.min(0)])
  })


  addEmployee() {
       //this.EmployeeForm.value

      this.employeservice.showmsg();
   // this.employeservice.saveEmployee(this.EmployeeForm.value);
      alert("Record has been saved");
      this.EmployeeForm.reset();

  }


}
