import { TestBed } from '@angular/core/testing';

import { FoodBlogService } from './food-blog.service';

describe('FoodBlogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodBlogService = TestBed.get(FoodBlogService);
    expect(service).toBeTruthy();
  });
});
