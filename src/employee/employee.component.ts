import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  EmployeeList=[{name:"amit",phno:"2323232332",salary:323232}];


  addEmployee(name: HTMLInputElement, phno: HTMLInputElement, salaryinput: HTMLInputElement):void
  {

      this.EmployeeList.push({name:name.value,
        phno:phno.value,
        salary:parseInt(salaryinput.value)
      });
     name.value="";
     phno.value="";
     salaryinput.value="";
  }

  addEmployeeTdf(EmployeeForm: NgForm)
  {

       console.log(EmployeeForm.value);
       if(EmployeeForm.value.salary >0)
       {
         this.EmployeeList.push(EmployeeForm.value);
         EmployeeForm.reset();
       }
       else
       {
         alert("salary should not be nagetive");
       }



  }
}
