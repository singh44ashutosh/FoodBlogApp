import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppAuthGuard } from './helpers/app.auth.guard';
import { ViewFoodBlogComponent } from './view-food-blog/view-food-blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreateFoodBlogComponent } from './create-food-blog/create-food-blog.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AppAuthGuard] },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'foodBlogs/:id', component: ViewFoodBlogComponent, canActivate: [AppAuthGuard] },
  { path: 'edit/:id', component: CreateFoodBlogComponent, canActivate: [AppAuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
