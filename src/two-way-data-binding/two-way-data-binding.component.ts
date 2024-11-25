import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-two-way-data-binding',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './two-way-data-binding.component.html',
  styleUrl: './two-way-data-binding.component.css'
})
export class TwoWayDataBindingComponent
{

  EmployeeName:string="";
  EmployeeBasicSalary:number=0;
  EmployeeCommission:number=0.0;




}
