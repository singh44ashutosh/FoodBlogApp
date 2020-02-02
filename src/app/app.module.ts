import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './shared-components/alert/alert.component';
import { LoginComponent } from './login/login.component';
import { AlertService } from './alert.service';
import { AppAuthenticationService } from './app.authentication.service';
import { HomeComponent } from './home/home.component';
import { FoodBlogService } from './food-blog.service';
import { ViewFoodBlogComponent } from './view-food-blog/view-food-blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreateFoodBlogComponent } from './create-food-blog/create-food-blog.component';
import { ContactService } from './contact.service';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    HomeComponent,
    ViewFoodBlogComponent,
    ContactUsComponent,
    CreateFoodBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AlertService, AppAuthenticationService, FoodBlogService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
