import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetProductsQuery } from '../Impl/get-products.query';
import { ProductRepository } from 'src/Infrastructure/Repository/product.repository';

@QueryHandler(GetProductsQuery)
export class GetProductsHandler implements IQueryHandler<GetProductsQuery> {
  constructor(private readonly productRepsitory: ProductRepository) {}

  async execute() {
    return this.productRepsitory.getProducts();
  }
}
