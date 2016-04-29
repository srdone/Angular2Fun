import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { ArticleModel } from './article-model';

@Component({
  selector: 'reddit-article',
  host: {
    class: 'row'
  },
  template: `
    <div class="four wide column center aligned votes">
      <div class="ui statistic">
        <div class="value">
          {{ article.votes }}
        </div>
        <div class="label">
          Points
        </div>
      </div>
    </div>
    <div class="twelve wide column">
      <a class="ui large header" href="{{article.link}}">
        {{ article.title }}
      </a>
      <ul class="ui big horizontal list voters">
        <li class="item">
          <a (click)="article.voteUp()">
            <i class="arrow up icon"></i>
            upvote
          </a>
        </li>
        <li class="item">
          <a (click)="article.voteDown()">
            <i class="arrow down icon"></i>
            downvote
          </a>
        </li>
        <li class="item">
          <a (click)="delete.emit(article)">
            <i class="remove circle icon"></i>
          </a>
        </li>
      </ul>
    </div>
  `
})
export class ArticleComponent {
  @Input() article:ArticleModel;
  @Output() delete = new EventEmitter();
}