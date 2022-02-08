
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.scss']
})
export class ClassBindingComponent implements OnInit {
  ProductServiceService: any;

  constructor(private productService:ProductServiceService) { }
  productTable:any;

  ngOnInit(): void {
    this.productTable=this.ProductServiceService.GetAllProducts();

  }


  

}
