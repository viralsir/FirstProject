import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EmployeeService} from '../employee.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-api-view',
  standalone: true,
  imports: [],
  templateUrl: './api-view.component.html',
  styleUrl: './api-view.component.css'
})
export class ApiViewComponent {

  userlist:any[]=[];

  constructor(private userservice:UserService) {
  }

  getApiData(){
       // this.httpclient.get("https://jsonplaceholder.typicode.com/users").subscribe((response:any)=>{
       //   this.userlist=response;
       //
      // })
         this.userservice.getUserData().subscribe((response:any) => {
            this.userlist=response;

         })

   //return  this.userlist.find(user=>user.city="surat")
  }




}
