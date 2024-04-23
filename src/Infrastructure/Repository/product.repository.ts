import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../../Domain/Entities/Product';
import { CreateProductCommand } from 'src/Application/Product/Commands/Impl/create-product.command';
import { UpdateProductCommand } from 'src/Application/Product/Commands/Impl/update-product.command';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async createProduct(product: CreateProductCommand) {
    return this.productRepository.save(product);
  }

  async getProduct(productId: number) {
    return this.productRepository.findOneBy({ productId: productId });
  }

  async getProducts() {
    return this.productRepository.find();
  }

  async updateProduct(product: UpdateProductCommand) {
    return this.productRepository.save(product);
  }

  async deleteProduct(productId: number) {
    return this.productRepository.delete(productId);
  }
}
