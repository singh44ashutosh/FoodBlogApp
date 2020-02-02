import { Component, OnInit, OnDestroy } from '@angular/core';
import { FoodBlog } from '../models/food-blog.model';
import { Subscription } from 'rxjs';
import { FoodBlogService } from '../food-blog.service';
import { AlertService } from '../alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  foodBlogs: FoodBlog[];
  subscription: Subscription;

  constructor(
    private foodBlogService: FoodBlogService,
    private alertService: AlertService,
    private router: Router) { }

  ngOnInit() {
    this.getAllFoodBlogs();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getAllFoodBlogs() {
    this.subscription =
      this.foodBlogService.getFoodBlogs().subscribe(
        data => this.foodBlogs = data,
        error => {
          console.log(error);
          this.alertService.error(error);
        });
  }

  viewFoodBlog(id: number) {
    this.router.navigate(['foodBlogs', id]);
  }

  createNewBlog() {
    this.router.navigate(['edit', 0]);
  }

  editFoodBlog(id: number) {
    this.router.navigate(['edit', id]);
  }

  deleteFoodBlog(id: number) {
    if (confirm('Are you sure you want to delete Recipe ' + id)) {
      this.foodBlogService.deleteFoodBlog(id).subscribe(
        () => {
          console.log(`Food Blog with Id = ${id} deleted`);
          this.getAllFoodBlogs();
        },
        (error) => console.log(error)
      );
    }
  }
}
