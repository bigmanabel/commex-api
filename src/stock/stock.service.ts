import { BadRequestException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
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
      return `This action returns all stock`;
    } catch (error) {
      
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
