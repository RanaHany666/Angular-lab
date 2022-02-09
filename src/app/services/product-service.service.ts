import { Injectable } from '@angular/core';
import { IProduct } from '../sharedcalsses/IProudcts';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService { private productList:IProduct[]= [
   {id: 1,name: 'Lenvo',quantity: 10,price: 10000, image: 'assets/image/it.jpg', },
{id: 2,name: 'samsung ',quantity: 4,price: 56000,image: 'assets/image/it.jpg',},
{id: 3,name: 'HP',quantity: 2,price: 37000,image: 'assets/image/it.jpg',},
{id: 4,name: 'HP',quantity: 3,price: 26000,image: 'assets/image/it.jpg',},
               ];

               constructor() {
              }
              getAllProducts(){
                return this.productList;
              };
              // getProductById(id:number){
              //   const product = this.productList.find(product => product.id== id);
              //   if(!product || !(typeof id == 'number')) {
              //     return null;
              //   }
              //   return product;
              // }
}
