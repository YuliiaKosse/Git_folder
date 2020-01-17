import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllBlogArticlesComponent } from './all-blog-articles/all-blog-articles.component';
import { BlogArticleComponent } from './blog-article/blog-article.component';

@NgModule({
  declarations: [
    AppComponent,
    AllBlogArticlesComponent,
    BlogArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
