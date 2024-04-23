import { CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import { DeleteProductCommand } from '../Impl/delete-product.command';
import { ProductRepository } from '../../../../Infrastructure/Repository/product.repository';

@CommandHandler(DeleteProductCommand)
export class DeleteProductHandler implements IQueryHandler<DeleteProductCommand> {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(query: DeleteProductCommand) {
    return this.productRepository.deleteProduct(query.productId);
  }
}
