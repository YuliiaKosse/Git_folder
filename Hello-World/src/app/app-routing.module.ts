import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllBlogArticlesComponent } from './all-blog-articles/all-blog-articles.component';
import { BlogArticleComponent } from './blog-article/blog-article.component';

const routes: Routes = [
  {
    path: 'article',
    component: BlogArticleComponent
  }, {
  path: '**',
  component: AllBlogArticlesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
