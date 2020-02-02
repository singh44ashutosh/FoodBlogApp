import { Component, OnInit, ViewChild } from '@angular/core';
import { FoodBlogService } from '../food-blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FoodBlog } from '../models/food-blog.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-food-blog',
  templateUrl: './create-food-blog.component.html',
  styleUrls: ['./create-food-blog.component.css']
})
export class CreateFoodBlogComponent implements OnInit {

  foodBlog: FoodBlog;
  cardTitle: string;

  @ViewChild('blogForm', { static: false }) public createBlogForm: NgForm;

  constructor(
    private foodBlogService: FoodBlogService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(pm => {
      const id = +pm.get('id');
      this.getFoodBlog(id);
    });
  }

  private getFoodBlog(id: number) {
    if (id === 0) {
      this.foodBlog = {
        id: null,
        recipeName: null,
        recipeDetails: null
      };
      this.cardTitle = 'Create New Food Blog';
      if (this.createBlogForm) {
        this.createBlogForm.reset();
      }
    } else {
      this.cardTitle = 'Edit Food Blog';
      this.foodBlogService.getFoodBlog(id).subscribe(
        (foodBlog) => this.foodBlog = foodBlog,
        (error) => console.log(error)
      );
    }
  }

  saveBlog(): void {
    if (this.foodBlog.id == null) {
      this.foodBlogService.addFoodBlog(this.foodBlog)
        .subscribe(
          (data: FoodBlog) => {
            console.log(data);
            this.createBlogForm.reset();
            this.router.navigate(['home']);
          },
          (error: any) => console.log(error)
        );
    } else {
      this.foodBlogService.updateFoodBlog(this.foodBlog)
        .subscribe(
          () => {
            this.createBlogForm.reset();
            this.router.navigate(['home']);
          },
          (error: any) => console.log(error)
        );
    }
  }
}
