import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

searchKeywords:string
response:ProductModel[]

  constructor(private service:ProductService,private router: Router) { }

  ngOnInit(): void {
  }
  getSmartSearchValues(searchKeywords){ 
    
                          this.router.navigate(['/smartSearch', this.searchKeywords]);
  }
              

}
