import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.scss']
})
export class ClassBindingComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  printMsg(){
    console.log("welcome tp Angluar")
  }
  // textColor:string="text_sucess";
  // hasError:boolean=false;
  // isSpecial:boolean=false;
  // messageClasses={
  //   "text-sucess":!this.hasError,
  //   "text-danger":!this.hasError,
  //   "text-special":this.isSpecial


  // }
  // isactive=true;
  // isLoggedIn =true;
  // userName="salah";

  // ng for 
  // cars =["tibo","Logan","BMW"]

  

}
