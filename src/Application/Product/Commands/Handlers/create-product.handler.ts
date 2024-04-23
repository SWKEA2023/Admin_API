import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { CreateProductCommand } from '../Impl/create-product.command';
import { ProductRepository } from '../../../../Infrastructure/Repository/product.repository';

@CommandHandler(CreateProductCommand)
export class CreateProductHandler implements ICommandHandler<CreateProductCommand> {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(command: CreateProductCommand) {
    return this.productRepository.createProduct(command);
  }
}
