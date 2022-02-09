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
