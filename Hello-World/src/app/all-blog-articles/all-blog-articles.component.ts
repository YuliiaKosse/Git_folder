import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-blog-articles',
  templateUrl: './all-blog-articles.component.html',
  styleUrls: ['./all-blog-articles.component.css']
})
export class AllBlogArticlesComponent implements OnInit {
  blog1 = 'Hello World';
  blog ='History, Purpose and Usage';


  constructor() { }

  ngOnInit() {
  }

  public myFunction() {
    alert("Alert!");
  }

}
