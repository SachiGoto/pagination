import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Product, Products} from '../interfaces/interface'


@Injectable({
  providedIn: 'root'
})
export class CommonService {



  constructor(private cs:HttpClient) { }

  productPageUrl = "http://localhost:1337/api/green-products?populate=deep&pagination[page]="

  getProductPage(pageNumber:number){
    // return this.clientHttp.get<Product>(this.productUrl + "/" + id);
    return this.cs.get<{ data: Product }>(this.productPageUrl + pageNumber)
  }

  getProducts(pageNumber:number){
    return this.cs.get<Products>("http://localhost:1337/api/green-products?populate=deep&pagination[page]=" +pageNumber )
  }


  // getProducts(pageNumber:number){
  //   return this.cs.get<Products>()
  // }
}
