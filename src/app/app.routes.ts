import { Routes } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {AboutusComponent} from '../aboutus/aboutus.component';
import {ContactusComponent} from '../contactus/contactus.component';

export const routes: Routes = [
  {path: 'aboutus', component:AboutusComponent },
  {path:'home', component:HomeComponent},
  {path:'contactus',component:ContactusComponent},
  //{path:'',component:},
];
