import { Component } from '@angular/core';

@Component({
  selector: 'app-control-statement',
  standalone: true,
  imports: [],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css'
})
export class ControlStatementComponent {

  isVisible = true;

  Showdiv(show:boolean){
    this.isVisible = show;
  }
  PassingMarks:number=35;

  citylist:string[]=["Ahmedabad","Bombay","Surat","Baroda","Pune","Aanad"];
studentlist:any[]=[
  {"name":"vimal","maths":23,"science":33,"english":44},
  {"name":"amit","maths":53,"science":73,"english":44},
  {"name":"rajan","maths":63,"science":73,"english":44},
  {"name":"viren","maths":73,"science":33,"english":44},
  {"name":"jay","maths":23,"science":73,"english":44},
  {"name":"vikash","maths":23,"science":33,"english":44},
]

  name:string="Vimal ";
  maths:number=63;
  science:number=44;
  english:number=46;


}
