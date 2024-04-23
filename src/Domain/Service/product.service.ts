import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateProductCommand } from '../../Application/Product/Commands/Impl/create-product.command';
import { Product } from '../Entities/Product';
import { GetProductQuery } from '../../Application/Product/Queries/Impl/get-product.query';
import { GetProductsQuery } from '../../Application/Product/Queries/Impl/get-products.query';
import { Injectable } from '@nestjs/common';
import { UpdateProductCommand } from 'src/Application/Product/Commands/Impl/update-product.command';
import { DeleteProductCommand } from 'src/Application/Product/Commands/Impl/delete-product.command';

@Injectable()
export class ProductService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async createProduct(product: Product) {
    return this.commandBus.execute(
      new CreateProductCommand(product.productName, product.price, product.category),
    );
  }

  async getProduct(productId: number) {
    return this.queryBus.execute(new GetProductQuery(productId));
  }

  async getProducts() {
    return this.queryBus.execute(new GetProductsQuery());
  }

  async updateProduct(product: Product) {
    return this.commandBus.execute(
      new UpdateProductCommand(product.productId, product.productName, product.price, product.category),
    );
  }

  async deleteProduct(productId: number) {
    return this.commandBus.execute(new DeleteProductCommand(productId));
  }
}
