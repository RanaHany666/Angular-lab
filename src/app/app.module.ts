import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
//import { SharedclassesandtypesComponent} from './sharedclassesandtypes/sharedclassesandtypes.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { SharedcalssesComponent } from './sharedcalsses/sharedcalsses.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { UserComponent } from './servicess/user/user.component';
import { PostComponent } from './post/post.component';
import { WithdiscountComponent } from './withdiscount/withdiscount.component';
import { WithoutdiscountComponent } from './withoutdiscount/withoutdiscount.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    //SharedclassesandtypesComponent,
    ClassBindingComponent,
    SharedcalssesComponent,
    UserComponent,
    PostComponent,
    WithdiscountComponent,
    WithoutdiscountComponent,
    RegisterFormComponent,
    LoginFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
