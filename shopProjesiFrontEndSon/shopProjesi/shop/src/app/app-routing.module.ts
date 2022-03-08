import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'products',component:ProductComponent},
  {path:'product-add',component:AddProductComponent,canActivate:[LoginGuard]},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'products',pathMatch:'full'},
  //path yolu verilmemişse direkt product a yolla..
  {path:'products/category/:CatID',component:ProductComponent}
  //{path:'products/category/:CatID/:id/:id2',component:ProductComponent}
  //attribute gönderirken : kkonur ve birden fazla attribute gönderirken de bu şekilde devam eder.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
