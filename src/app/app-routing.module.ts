import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { PostComponent } from './post/post.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './servicess/user/user.component';

const routes: Routes = [
   {path:'',redirectTo:'/products',pathMatch:'full'},
  {path:'products',component:ProductsComponent} ,
  {path:'home',component:FooterComponent} ,
  {path:'user',component:UserComponent} ,
  {path:'post',component:PostComponent} 

];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
