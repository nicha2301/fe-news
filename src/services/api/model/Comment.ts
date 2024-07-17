
export class Comment {
  constructor(
    public articleId: string,
    public imageUrl: string,
    public author: string,
    public user: string,
    public content: string,
    public createdAt: Date
  ) {}
}
