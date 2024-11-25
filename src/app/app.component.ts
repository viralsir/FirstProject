import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Child1Component} from '../child1/child1.component';
import {Child2Component} from '../child2/child2.component';
import {AboutusComponent} from '../aboutus/aboutus.component';
import {ContactusComponent} from '../contactus/contactus.component';
import {HomeComponent} from '../home/home.component';
import {OneWayDataBindingComponent} from '../one-way-data-binding/one-way-data-binding.component';
import {TwoWayDataBindingComponent} from '../two-way-data-binding/two-way-data-binding.component';


@Component({
  selector: 'app-mainbody',
  standalone: true,
  imports: [RouterOutlet, Child1Component, Child2Component, AboutusComponent, ContactusComponent, HomeComponent,OneWayDataBindingComponent,TwoWayDataBindingComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstProject';
  Age:number = 30;
  phno:string="12232323";
  no1:number=-12;
  no2:number=4;


}
