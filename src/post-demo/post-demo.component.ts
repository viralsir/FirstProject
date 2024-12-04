import { Component } from '@angular/core';
import {FormBuilder, FormsModule, NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-post-demo',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './post-demo.component.html',
  styleUrl: './post-demo.component.css'
})
export class PostDemoComponent {

  postlist:any[]=[]

  constructor(public  httpclient:HttpClient) {


  }


  savePost(postformref: NgForm) {

    this.httpclient.post("https://jsonplaceholder.typicode.com/posts",postformref.value).subscribe((response:any) => {
      console.log(response);
    })
    alert("Record has been saved.")
    postformref.reset();
    this.getPost();

  }

  getPost(){
    this.httpclient.get("https://jsonplaceholder.typicode.com/posts/").subscribe((response:any) => {
      this.postlist=response;
    })
  }

}
