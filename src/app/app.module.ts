import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './service/product.service';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { HeaderComponent } from './home/header/header.component';
import { LogoComponent } from './home/logo/logo.component';
import { SearchComponent } from './home/search/search.component';
import { NavigationComponent } from './home/navigation/navigation.component';
//import { HttpInterceptorBasicAuthService } from './service/http/http-interceptor-basic-auth.service11';

const routes: Routes = [  
  // { path: '', redirectTo: 'getAll', pathMatch: 'full' },  
  { path: 'getAll', component: ProductComponent },  
  { path: 'getProdByCat/:name', component: ProductComponent },
  { path: 'getProductByCategory1/:name', component: ProductComponent },
  { path: 'getProductSearch/:name', component: ProductComponent },
  { path: 'smartSearch/:name', component: ProductComponent },

  { path: 'login', component: LoginComponent },

{ path: 'signup', component: SignupComponent }
  
 // { path: 'add-student', component: AddStudentComponent },  
]; 

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    LogoComponent,
    SearchComponent,
    NavigationComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  // providers: [ProductService,{provide: HTTP_INTERCEPTORS,useClass:HttpInterceptorBasicAuthService,multi:true}],
   bootstrap: [AppComponent]
})
export class AppModule { }
