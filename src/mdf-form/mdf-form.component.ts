import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-mdf-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './mdf-form.component.html',
  styleUrl: './mdf-form.component.css'
})
export class MdfFormComponent {

  employeeformgroup=new FormGroup(
    { id:new FormControl("",[Validators.required]),
      name:new FormControl(""),
      salary:new FormControl("", [Validators.required,Validators.min(0)])
    }
  )

  employeelist:any[]=[];


  SaveEmployee() {
    //console.log(this.employeeformgroup.value);
    this.employeelist.push(this.employeeformgroup.value);
    this.employeeformgroup.reset();
  }



}
