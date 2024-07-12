import { BadRequestException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(Product) private readonly productRepository: Repository<Product>,
  ) {}

  async findAll() {
    try {
      const products = await this.productRepository.find({
        select: {
          id: true,
          name: true,
          stockQuantity: true
        }
      });

      if (products.length < 1) {
        throw new NotFoundException('No product found');
      }

      return {
        statusCode: HttpStatus.OK,
        message: 'Products retrieved successfully',
        data: products,
      }
    } catch (error) {
      if (error.status === HttpStatus.NOT_FOUND) {
        throw new NotFoundException(error.message);
      }
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: number) {
    try {
      const product = await this.productRepository.find({
        where: {
          id
        },
        select: {
          id: true,
          name: true,
          stockQuantity: true
        }
      });

      if (!product) {
        throw new NotFoundException('Product not found');
      }
    } catch (error) {
      if (error.status === HttpStatus.NOT_FOUND) {
        throw new NotFoundException(error.message);
      }
      throw new BadRequestException(error.message);
    }
  }
}
