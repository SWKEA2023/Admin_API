export class UpdateProductCommand {
  constructor(
    public readonly productId: number,
    public readonly productName: string,
    public readonly price: number,
    public readonly category: string,
  ) {}
}
