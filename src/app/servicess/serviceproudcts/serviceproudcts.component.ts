import { Component, OnInit } from '@angular/core';
import { PtserviceService } from '../ptservice.service';

@Component({
  selector: 'app-serviceproudcts',
  templateUrl: './serviceproudcts.component.html',
  styleUrls: ['./serviceproudcts.component.scss']
})
export class ServiceproudctsComponent implements OnInit {

 

  constructor(private Ptserviceservice:PtserviceService) { }

  ngOnInit(): void {


  }

}
