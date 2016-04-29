import { Component } from 'angular2/core';
import { ArticleComponent } from './reddit-article';
import { ArticleModel } from './article-model';

@Component({
  selector: 'reddit',
  directives: [ArticleComponent],
  providers: [ArticleModel],
  template: `
    <form class="ui large form segment">
      <h3 class="ui header">Add a link</h3>
      
      <div class="field">
        <label for="title">Title:</label>
        <input name="title" #newTitle>
      </div>
      <div class="field">
        <label for="link">Link:</label>
        <input name="link" #newLink>
      </div>
      
      <button (click)="addArticle(newTitle, newLink)"
        class="ui positive right floated button">
        Submit link
      </button>
    </form>
    <div class="ui grid posts">
      <reddit-article *ngFor="let article of articles" [article]="article"></reddit-article>
    </div>
  `
})
export class RedditApp {
  articles: ArticleModel[];
  
  constructor() {
    this.articles = [];
  }
  
  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    this.articles.push(new ArticleModel(title.value, link.value));
  }
}