import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postList:any;
   errorMsg:any;

  constructor(private Postservice :PostService) { }
  ngOnInit(): void {
    this.Postservice.getUsers().subscribe(
      userData=>{
        this. postList=userData;
      },
      error=>
      {
        this.errorMsg=error;
      }
    )
  }

}
