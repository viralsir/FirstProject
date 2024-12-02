import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-api-view',
  standalone: true,
  imports: [],
  templateUrl: './api-view.component.html',
  styleUrl: './api-view.component.css'
})
export class ApiViewComponent {

  userlist:any[]=[];

  constructor(private httpclient:HttpClient) {
  }

  getApiData(){
       this.httpclient.get("https://jsonplaceholder.typicode.com/users").subscribe((response:any)=>{
         this.userlist=response;

       })

   //return  this.userlist.find(user=>user.city="surat")
  }




}
