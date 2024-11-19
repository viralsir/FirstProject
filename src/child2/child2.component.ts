import { Component } from '@angular/core';
import {Child1Component} from '../child1/child1.component';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [
    Child1Component
  ],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {

}
