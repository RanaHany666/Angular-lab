import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sharedclassesandtypes',
  templateUrl: './sharedclassesandtypes.component.html',
  styleUrls: ['./sharedclassesandtypes.component.scss']
})
export class SharedclassesandtypesComponent implements OnInit {

  constructor() { }
  id:number=5;
  name:string="Rana Hany";
  quantity:number=5;
  price:number=5;
  image:string="mohamed";

  ngOnInit(): void {
  }

}
