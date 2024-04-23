import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetProductQuery } from '../Impl/get-product.query';
import { ProductRepository } from '../../../../Infrastructure/Repository/product.repository';

@QueryHandler(GetProductQuery)
export class GetProductHandler implements IQueryHandler<GetProductQuery> {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(query: GetProductQuery) {
    return this.productRepository.getProduct(query.productId);
  }
}
