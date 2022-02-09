import { Component, OnInit } from '@angular/core';
import { ICategory } from '../sharedcalsses/ICategory';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  categoryList:ICategory[];

    constructor() {
      this.categoryList = [
        {
          id: 1,
          name: 'phones',
        },
        {
          id: 2,
          name: 'clothes',
        },
        {
          id: 3,
          name: 'technologies',
        },
      ];
     }

    ngOnInit(): void {
    }
  
  }
