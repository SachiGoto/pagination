import { Component, OnInit } from '@angular/core';
import { Product, Products } from '../interfaces/interface';
import {CommonService} from '../services/common.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  page:number = 1;
  products:Product[] = [];
  currentPage = 1;
  server = "http://localhost:1337";
  totalPages = 0 ;
  showLoadBtn = true;

  loading = false;
  constructor(private cs:CommonService) { }


  // loadAnotherPage(){
  //   console.log("clicked");
  // }

  loadMore( ){
        //  this.currentPage += 1;
        this.loading=true;
         this.currentPage = this.currentPage + 1;
         this.cs.getProducts(this.currentPage).subscribe(res=>{
          this.loading = false;
              for(let i=0; i<res.data.length; i++){
                this.products.push(res.data[i]);

              }
         })



         if(this.currentPage == this.totalPages){
               this.showLoadBtn = false;
         }
  }

  ngOnInit(): void {
    // this.cs.getProductPage(this.page).subscribe(res=>{

    //   this.products = res.data;

    //   console.log(this.products);
    // })
    // }

this.cs.getProducts(1).subscribe(res=>{
    this.products = res.data;
    this.totalPages = res.meta.pagination.pageCount;
})



  }

}


