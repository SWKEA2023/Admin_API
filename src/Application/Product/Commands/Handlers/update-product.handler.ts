import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { ProductRepository } from '../../../../Infrastructure/Repository/product.repository';
import { UpdateProductCommand } from '../Impl/update-product.command';

@CommandHandler(UpdateProductCommand)
export class UpdateProductHandler implements ICommandHandler<UpdateProductCommand> {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(product: UpdateProductCommand) {
    return this.productRepository.updateProduct(product);
  }
}
