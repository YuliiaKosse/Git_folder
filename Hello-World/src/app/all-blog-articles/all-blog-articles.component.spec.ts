import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBlogArticlesComponent } from './all-blog-articles.component';

describe('AllBlogArticlesComponent', () => {
  let component: AllBlogArticlesComponent;
  let fixture: ComponentFixture<AllBlogArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBlogArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBlogArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
