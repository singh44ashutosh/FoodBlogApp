import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFoodBlogComponent } from './create-food-blog.component';

describe('CreateFoodBlogComponent', () => {
  let component: CreateFoodBlogComponent;
  let fixture: ComponentFixture<CreateFoodBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFoodBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFoodBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
