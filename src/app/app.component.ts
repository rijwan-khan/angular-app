import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from './model/product.model';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  bkName = 'BOOKS'
  elName = 'ELECTRONICS'
  searchKeywords:string
  response:ProductModel[]
  constructor (private service:ProductService,private router: Router) {}
  route() {
    this.router.navigate(['/getProdByCat', this.bkName]);
    this.router.navigate(['/getProductByCategory1', this.elName]);

  }
  // getSmartSearchValues(searchKeywords){ 
  //   this.service.getProductSearch(this.searchKeywords).subscribe((posReq:any)=>{
  //           this.response=posReq;
  //           console.log("getProdByCat ac")
  //           this.router.navigate(['/getProductSearch/', this.searchKeywords]);

  //          // this.route();
  //             }
              
  //   )};
  
  
  title = 'Ecommer-app';
}

