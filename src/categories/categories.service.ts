import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category) private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const category = await this.categoryRepository.create({
        ...createCategoryDto,
      });

      await this.categoryRepository.save(category);

      return {
        statusCode: HttpStatus.CREATED,
        message: 'Category created successfully',
        data: category
      }
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      const categories = await this.categoryRepository.find();

      if(categories.length < 1) {
        throw new HttpException('Categories not found', HttpStatus.NO_CONTENT);
      }

      return {
        statusCode: HttpStatus.OK,
        message: 'Categories retrieved successfully',
        data: categories
      }
    } catch (error) {
      if (error.status === HttpStatus.NO_CONTENT) {
        throw new HttpException(error.message, error.status);
      }
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: number) {
    try {
      const category = await this.categoryRepository.findOneBy({id});

      if (!category) {
        throw new NotFoundException('Category not found');
      }

      return {
        statusCode: HttpStatus.OK,
        message: 'Category retrieved successfully',
        data: category
      }
    } catch (error) {
      if (error.status === HttpStatus.NOT_FOUND) {
        throw new NotFoundException(error.message);
      }
      throw new BadRequestException(error.message);
    }
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    try {
      const category = this.categoryRepository.findOneBy({ id });
      
      if (!category) {
        throw new NotFoundException('Category not found');
      }

      await this.categoryRepository.update(id, {
        ...updateCategoryDto,
      });

      return {
        statusCode: HttpStatus.OK,
        message: 'Category updated successfully',
      }
    } catch (error) {
      if (error.status === HttpStatus.NOT_FOUND) {
        throw new NotFoundException(error.message);
      }
    }
  }

  async remove(id: number) {
    try {
      const category = this.categoryRepository.findOneBy({ id });

      if (!category) {
        throw new NotFoundException('Category not found');
      }

      await this.categoryRepository.delete(id);

      return {
        statusCode: HttpStatus.OK,
        message: 'Category deleted successfully'
      }
    } catch (error) {
      if (error.status === HttpStatus.NOT_FOUND) {
        throw new NotFoundException(error.message);
      }
      throw new BadRequestException(error.message);
    }
  }
}
