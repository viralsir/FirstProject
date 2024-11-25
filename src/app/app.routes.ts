import { Routes } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {AboutusComponent} from '../aboutus/aboutus.component';
import {ContactusComponent} from '../contactus/contactus.component';
import {OneWayDataBindingComponent} from '../one-way-data-binding/one-way-data-binding.component';
import {TwoWayDataBindingComponent} from '../two-way-data-binding/two-way-data-binding.component';

export const routes: Routes = [
  {path: 'aboutus', component:AboutusComponent },
  {path:'home', component:HomeComponent},
  {path:'contactus',component:ContactusComponent},
  {path:"oneway",component:OneWayDataBindingComponent},
  {path:"twoway",component:TwoWayDataBindingComponent},
  //{path:'',component:},
];
