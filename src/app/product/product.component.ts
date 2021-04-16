import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../model/product.model';
import { ProductService } from '../service/product.service';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private productModel=new ProductModel();
  public response:ProductModel[];
  name = '';
  searchKeywords: string;

  constructor(private service:ProductService, private activatedroute: ActivatedRoute ,private appComponent : AppComponent) {
    this.activatedroute.params.subscribe(data => {
      this.name = data.name
      //alert(data.name === 'ELECTRONICS');
      
    })
   }

  ngOnInit(): void {
    if(this.name === 'ELECTRONICS') {
      this.service.getProductByCategory1().subscribe((posReq:any)=>{
        this.response=posReq;
      });
    } else if(this.name === 'BOOKS') {
      this.service.getProductByCategory().subscribe((posReq:any)=>{
        this.response=posReq;
      });
     
      
    } else {

      this.service.getProductSearch(this.name).subscribe((posReq:any)=>{
        this.response=posReq;
      });
    }
   
    
    // searchForm(searchInfo)  
    // {  
      
    //       this.posReq.name = this.Name.value;  
    //       this.user.emailId = this.Email.value;  
    //       this.getData(this.user);  
    // }
  };
  getSmartSearchValues(searchKeywords){ 
    alert("dd")
    // this.service.getProductByCategory().subscribe((posReq:any)=>{
    //   this.response=posReq;
    this.service.getProductSearch(this.searchKeywords).subscribe((posReq:any)=>{
            this.response=posReq;

    }
    )};
 
//   this.service.getAllProduct().subscribe((posReq:any)=>{
//     this.response=posReq;
//   });

//   this.service.getProductByCategory().subscribe((posReq:any)=>{
//     this.response=posReq;
//   });
//  this.service.getProductByCategory1().subscribe((posReq:any)=>{
//   this.response=posReq;
//  });
}
