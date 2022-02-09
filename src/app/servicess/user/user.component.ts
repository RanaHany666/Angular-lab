import { Component, OnInit } from '@angular/core';
import { UsemanrService } from '../usemanr.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userlist:any;
   errorMsg:any;

  constructor(private Usemanrservice:UsemanrService) { }
  ngOnInit(): void {
    this.Usemanrservice.getUsers().subscribe(
      userData=>{
        this.userlist=userData;
      },
      error=>
      {
        this.errorMsg=error;
      }
    )
  }

}
