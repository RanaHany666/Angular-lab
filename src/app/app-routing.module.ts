import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PostComponent } from './post/post.component';
import { ProductsComponent } from './products/products.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { UserComponent } from './servicess/user/user.component';
import { WithdiscountComponent } from './withdiscount/withdiscount.component';
import { WithoutdiscountComponent } from './withoutdiscount/withoutdiscount.component';

const routes: Routes = [
   {path:'',redirectTo:'/products',pathMatch:'full'},
  {path:'products',component:ProductsComponent,
  children:[
    {path:'withdiscount',component:WithdiscountComponent},
    {path:'withoutdiscount',component:WithoutdiscountComponent}
  ]
} ,
  {path:'home',component:FooterComponent} ,
  {path:'user',component:UserComponent} ,
  {path:'post',component:PostComponent} ,
  {path:'register',component:RegisterFormComponent},
  {path:'login',component:LoginFormComponent},


];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
