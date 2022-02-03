
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
  discount!: DiscountOffers;
  storeName!: String;
  storeLogo!: String;
  productList!: IProduct[];
  categoryList!:ICategory[];
  clientName!: String;
  isPurshased!: Boolean;
  constructor() {
    this.discount = DiscountOffers.ten;
    this.storeName = 'Laptop';
    this.storeLogo = 'Lenvo';
    this.productList = [
      {id: 1,name: 'Lenvo',quantity: 10,price: 10000,        image: 'assets/image/it.jpg', },
      {id: 2,name: 'samsung ',quantity: 10,price: 10000,image: 'assets/image/it.jpg',},
      {id: 3,name: 'HP',quantity: 10,price: 10000,image: 'assets/image/it.jpg',},

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
    this.clientName = 'Rana Hany';
    this.isPurshased = true;
  }

  ngOnInit(): void {}
}


