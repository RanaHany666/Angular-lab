import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../sharedcalsses/DiscountOffers';
import { IProduct } from '../sharedcalsses/IProudcts';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  discount: DiscountOffers;
  storeName: String;
  storeLogo: String;
  productList: IProduct[];
  //categoryList:ICategory[];
  clientName: String;
  isPurshased: Boolean;
  constructor() {
    this.discount = DiscountOffers.ten;
    this.storeName = 'Laptop';
    this.storeLogo = 'Laptop';
    this.productList = [
      {
        id: 1,
        name: 'Lenvo',
        quantity: 10,
        price: 10000,
        image: 'assets/image/it.jpg',
      },
      {
        id: 2,
        name: 'samsung note10',
        quantity: 10,
        price: 10000,
        image: 'assets/image/it.jpg',
      },
      {
        id: 3,
        name: 'samsung note10',
        quantity: 10,
        price: 10000,
        image: 'assets/image/it.jpg',
      },
    ];
    // this.categoryList = [
    //   {
    //     id: 1,
    //     name: 'phones',
    //   },
    //   {
    //     id: 2,
    //     name: 'clothes',
    //   },
    //   {
    //     id: 3,
    //     name: 'technologies',
    //   },
    // ];
    this.clientName = 'Rana Hany';
    this.isPurshased = true;
  }

  ngOnInit(): void {}
}


// (1)	Property “Discount” of type DiscountOffers Enum.
// (2)	Property “Store name” of type string.
// (3)	Property “Store Logo” of type string.
// (4)	Property “ProductList” which is an array of IProduct.
// (5)	Property “CategoryList” which an array of type ICategory.
// (6)	Property “ClientName” of type String.
// (7)	Property “IsPurshased” of type Boolean.
