import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Between, FindOptionsWhere, Like, Repository } from 'typeorm';
import { PaginationQueryDto } from 'src/shared/dto/pagination-query.dto';
import { FindProductsByDto } from './dto/find-products-by.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private readonly productRepository: Repository<Product>,
  ) {}
  async create(createProductDto: CreateProductDto) {
    try {
      const product = this.productRepository.create({
        ...createProductDto,
        category: {
          id: createProductDto.category
        },
        region: {
          id: createProductDto.region
        }
      });

      await this.productRepository.save(product);

      return {
        statusCode: HttpStatus.CREATED,
        message: 'Product added successfully',
        data: product,
      }
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(paginationQueryDto: PaginationQueryDto, findProductsByDto: FindProductsByDto) {
    const { limit, offset } = paginationQueryDto;
    const { name, category, region, min, max } = findProductsByDto;

    try {
      const conditions: FindOptionsWhere<Product> | FindOptionsWhere<Product>[] = {
        ...(name ? { name: Like(`%${name}%`) } : {}),
        ...(category ? { category: { id: category } } : {}),
        ...(region ? { region: { id: region } } : {}),
        ...( min && max ? { price: Between(min, max) } : {}),
      }

      const products = await this.productRepository.find({
        where: conditions,
        take: limit,
        skip: offset,
        relations: ['category', 'region'],
      });

      if (products.length < 1) {
        throw new HttpException({
          status: HttpStatus.NO_CONTENT,
          error: 'No product found',
        }, HttpStatus.NO_CONTENT);
      }

      return {
        statusCode: HttpStatus.OK,
        message: 'Products retrieved successfully',
        data: products,
      }
    } catch (error) {
      if (error.status === HttpStatus.NO_CONTENT) {
        throw new HttpException(error.response.error, HttpStatus.NO_CONTENT);
      }
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: number) {
    try {
      const product = await this.productRepository.findOne({ 
        where: {
          id,
        },
        relations: ['category', 'region'],
       });

      if (!product) {
        throw new NotFoundException('Product not found');
      }

      return {
        status: true,
        message: 'Product retrieved successfully',
        data: product
      }
    } catch (error) {
      if (error.status === HttpStatus.NOT_FOUND) {
        throw new NotFoundException(error.message);
      }
      throw new BadRequestException(error.message);
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      const product = await this.productRepository.findOneBy({ id });

      if (!product) {
        throw new NotFoundException('Product not found');
      }

      await this.productRepository.update(id, {
        ...updateProductDto,
        category: {
          id: updateProductDto.category
        }, 
        region: {
          id: updateProductDto.region
        }
      });

      return {
        statusCode: HttpStatus.OK,
        message: 'Product updated successfully',
      }
    } catch (error) {
      if (error.status === HttpStatus.NOT_FOUND) {
        throw new NotFoundException(error.message);
      }
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: number) {
    try {
      const product = this.productRepository.findOneBy({ id });

      if (!product) {
        throw new NotFoundException('Product not found');
      }

      await this.productRepository.delete(id);

      return {
        statusCode: HttpStatus.OK,
        message: 'Product deleted successfully',
      }
    } catch (error) {
      if (error.status === HttpStatus.NOT_FOUND) {
        throw new NotFoundException(error.message);
      }
      throw new BadRequestException(error.message);
    }
  }
}