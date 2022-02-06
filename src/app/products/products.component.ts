
import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../sharedcalsses/DiscountOffers';
import { ICategory } from '../sharedcalsses/ICategory';
import { IProduct } from '../sharedcalsses/IProudcts';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  discount: DiscountOffers;
  storeName: String;
  storeLogo!: String;
  productList!: IProduct[];
  categoryList!:ICategory[];
  clientName!: String;
  isPurshased!: Boolean;
  constructor() {
    this.discount = DiscountOffers.ten;
    this.storeName = "Dream ";
    this.storeLogo = 'Lenvo';
    this.productList = [
      {id: 1,name: 'Lenvo',quantity: 10,price: 10000,        image: 'assets/image/it.jpg', },
      {id: 2,name: 'samsung ',quantity: 4,price: 56000,image: 'assets/image/it.jpg',},
      {id: 3,name: 'HP',quantity: 2,price: 37000,image: 'assets/image/it.jpg',},
      {id: 3,name: 'HP',quantity: 3,price: 26000,image: 'assets/image/it.jpg',},


                     ];
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
    this.clientName = '';
    this.isPurshased = true;
  }
  show=true; // with ngIF
  isDisplayed=false;
   message=""
  hidTable()
  {
   this.show=!this.show // with ngIF
  this.isDisplayed=!this.isDisplayed; //with toggle
  this.message= "Thanks for purchasing from our Store"
  this.clientName=this.clientName
  this.isPurshased=true
  }
 


  ngOnInit(): void {}
}


