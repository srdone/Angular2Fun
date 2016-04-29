export class ArticleModel {
  constructor(
    public title:string,
    public link: string,
    public votes?: number) {
    this.votes = votes || 0;
  }
  
  voteUp(): void {
    this.votes += 1;
  }
  
  voteDown(): void {
    this.votes -= 1;
  }
}