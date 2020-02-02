import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFoodBlogComponent } from './view-food-blog.component';

describe('ViewFoodBlogComponent', () => {
  let component: ViewFoodBlogComponent;
  let fixture: ComponentFixture<ViewFoodBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFoodBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFoodBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
