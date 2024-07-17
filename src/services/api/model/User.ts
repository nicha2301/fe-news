export class User {
  constructor(
    public googleId?: string,
    public imageUrl?: string,
    public email?: string,
    public name?: string,
    public givenName?: string,
    public familyName?: string
  ) {}
}
