import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductModel } from "../model/product.model";


@Injectable({
    providedIn:"root"
})
export class ProductService {
    private baseUrl='http://localhost:9095/getAll'; 

    constructor(private http:HttpClient) {
        
    }
    getAllProduct():Observable<any>{
        return this.http.get("http://localhost:9095/getAll");
    };
    getProductByCategory():Observable<any>{
        return this.http.get("http://localhost:9095/getProdByCat/BOOKS");
    };

    getProductByCategory1():Observable<any>{
        return this.http.get("http://localhost:9095/getProdByCat/ELECTRONICS");
    };
    getProductSearch(searchKeywords):Observable<any>{
        return this.http.get("http://localhost:9095/getProdByName/"+searchKeywords);
    };

    getUser(searchKeywords):Observable<any>{
       // let basicAuthHeaderString=this.createBasicAuthenticationHeader();
     

        return this.http.get("http://localhost:9095/getProdByName/"+searchKeywords);
    };

    // createBasicAuthenticationHeader(){
    //    let username="rijwan123"
    //    let password="rijwan123"
    //    let basicAuthHeaderString="Basic"+ window.btoa(username+":"+password);
    //    return basicAuthHeaderString;
    // }
}