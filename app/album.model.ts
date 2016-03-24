export class Album{
  public inCart: boolean = false;
  constructor(
    public artist: string,
    public albumName: string,
    public price: number,
    public genre: string,
    public id: number){}
}
