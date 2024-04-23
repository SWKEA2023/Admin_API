export class CreateProductCommand {
  constructor(
    public readonly productName: string,
    public readonly price: number,
    public readonly category: string,
  ) {}
}