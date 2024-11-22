import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './one-way-data-binding.component.html',
  styleUrl: './one-way-data-binding.component.css'
})
export class OneWayDataBindingComponent {

  studentname:string="viren";
  studentcourse:string="Java";
  studentfees:number=34444;
  studentdiscount:number=2000;
  isDisabled:boolean=false;
  type:string="date";
  style:string="background-color:yellow"
 msg:string="this is a difference between string interpollution and property binding";



  displaymsg(param:string){
      //alert("display msg from ts ");
      alert("hello from ts  to "+ param);
  }
  calculateFees(param:number){
    //alert("display msg from ts ");
    this.studentdiscount=param;
  }

  objectpasingfunction(discountinput: HTMLInputElement)
  {
    discountinput.style.backgroundColor="";
     if(Number(discountinput.value)>=0)
     {
       this.studentdiscount=Number(discountinput.value);
     }
     else
     {
       discountinput.style.backgroundColor="red";
     }

  }
}
