import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {




  constructor(private httpclient:HttpClient) { }


  getUserData(){
    return this.httpclient.get("https://jsonplaceholder.typicode.com/users");
  }



}
