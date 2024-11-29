import { Routes } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {AboutusComponent} from '../aboutus/aboutus.component';
import {ContactusComponent} from '../contactus/contactus.component';
import {OneWayDataBindingComponent} from '../one-way-data-binding/one-way-data-binding.component';
import {TwoWayDataBindingComponent} from '../two-way-data-binding/two-way-data-binding.component';
import {ControlStatementComponent} from '../control-statement/control-statement.component';
import {EmployeeComponent} from '../employee/employee.component';
import {MdfFormComponent} from '../mdf-form/mdf-form.component';
import {EmployeeEntryComponent} from '../employee-entry/employee-entry.component';
import {EmployeeViewComponent} from '../employee-view/employee-view.component';

export const routes: Routes = [
  {path: 'aboutus', component:AboutusComponent },
  {path:'home', component:HomeComponent},
  {path:'contactus',component:ContactusComponent},
  {path:"oneway",component:OneWayDataBindingComponent},
  {path:"twoway",component:TwoWayDataBindingComponent},
  {path:"controlstatement",component:ControlStatementComponent},
  {path:"Employee",component:EmployeeComponent},
  {path:"MDF",component:MdfFormComponent},
  {path:"Entry",component:EmployeeEntryComponent},
  {path:"View",component:EmployeeViewComponent}
  //{path:'',component:},
];
