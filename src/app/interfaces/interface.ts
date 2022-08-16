export interface Product {
  id:number;
  attributes:{
    Title:String;
    Price:number;
    ProductImageFront:{
      data:{
        attributes:{
          formats:{
            small:{
              url:string;
            }
          }
        }
      }
    }


  }

  }



  export interface Products{
      data: Product[];
      meta:{
           pagination:{
            page:number;
            pageSize:number;
            pageCount:number;
            total:number;
           }
      }
  }
