import { Component, OnInit } from '@angular/core';
import { FoodBlogService } from '../food-blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FoodBlog } from '../models/food-blog.model';

@Component({
  selector: 'app-view-food-blog',
  templateUrl: './view-food-blog.component.html',
  styleUrls: ['./view-food-blog.component.css']
})
export class ViewFoodBlogComponent implements OnInit {

  foodBlog: FoodBlog;

  constructor(private foodBlogService: FoodBlogService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(pm => {
      const id = +pm.get('id');
      this.foodBlogService.getFoodBlog(id).subscribe(
        (foodBlog) => this.foodBlog = foodBlog,
        (error) => console.log(error)
      );
    });
  }

  backToBlogs() {
    this.router.navigate(['/home']);
  }
}

