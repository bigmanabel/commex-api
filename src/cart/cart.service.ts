import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { Repository } from 'typeorm';
import { Product } from 'src/products/entities/product.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart) private readonly cartRepository: Repository<Cart>,
    @InjectRepository(Product) private readonly productRepository: Repository<Product>,
  ) { }

  async create(createCartDto: CreateCartDto) {
    try {
      const product = await this.productRepository.findOneBy({
        id: createCartDto.product })

      const cart = this.cartRepository.create({
        quantity: createCartDto.quantity,
        product
      });

      await this.cartRepository.save(cart);

      return {
        statusCode: HttpStatus.CREATED,
        message: 'Cart added successfully',
        data: cart,
      }
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      const cart = await this.cartRepository.find({
        relations: ['product'],
        
      });

      if (cart.length < 1) {
        throw new HttpException('Cart is empty', HttpStatus.NO_CONTENT);
      }

      return {
        statusCode: HttpStatus.OK,
        message: 'Cart retrieved successfully',
        data: cart,
      }

    } catch (error) {
      if (error.status === HttpStatus.NO_CONTENT) {
        throw new HttpException(error.message, HttpStatus.NO_CONTENT);
      }
      throw new BadRequestException(error.message);
    }
  }

  async update(id: number, updateCartDto: UpdateCartDto) {
    try {
      const cart = await this.cartRepository.findOneBy({ id });

      if (!cart) {
        throw new NotFoundException('Item not found');
      }

      await this.cartRepository.update(cart.id, updateCartDto);

      return {
        statusCode: HttpStatus.OK,
        message: 'Cart item quantity updated successfully',
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
      const cart = await this.cartRepository.findOneBy({id});

      if (!cart) {
        throw new NotFoundException('Item not found');
      }

      await this.cartRepository.delete(id);

      return {
        statusCode: HttpStatus.OK,
        message: 'Cart item deleted successfully'
      }
    } catch (error) {
      if (error.status === HttpStatus.NOT_FOUND) {
        throw new NotFoundException(error.message);
      }
      throw new BadRequestException(error.message);
    }
  }
}
