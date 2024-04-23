import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ProductService } from '../../Domain/Service/product.service';
import { Product } from '../../Domain/Entities/Product';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Products')
@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    @Inject('PRODUCT_QUEUE')
    private readonly client: ClientProxy,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create Product' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiCreatedResponse({
    status: 201,
    type: Product,
    description: 'The record has been successfully created',
  })
  async createProduct(@Body() product: Product) {
    const response = await this.productService.createProduct(product);
    this.client.emit('Product_created', response);
    return response;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get product by id' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Product,
  })
  async getProduct(@Param('id') productId: number) {
    return this.productService.getProduct(productId);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Products' })
  @ApiResponse({
    status: 200,
    description: 'The found records',
    type: Product,
    isArray: true,
  })
  async getProducts() {
    return this.productService.getProducts();
  }

  @MessagePattern('get_all_products')
  async getProductsEs() {
    const response = this.productService.getProducts();
    this.client.emit('products_list', response);
  }

  @Post('update')
  @ApiOperation({ summary: 'Update product' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async updateProduct(@Body() product: Product) {
    const response = await this.productService.updateProduct(product);
    this.client.emit('Product_updated', response);
    return response;
  }

  @Post(':id')
  @ApiOperation({ summary: 'Delete product' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async deleteProduct(@Param('id') productId: number) {
    const response = await this.productService.deleteProduct(productId);
    this.client.emit('Product_deleted', response);
    return response;
  }
}
