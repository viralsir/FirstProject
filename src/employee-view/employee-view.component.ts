import {Component, Inject} from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-view',
  standalone: true,
  imports: [],
  templateUrl: './employee-view.component.html',
  styleUrl: './employee-view.component.css'
})
export class EmployeeViewComponent {

  employeeservice:EmployeeService=Inject("EmployeeService");




}
