import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FindProductsByDto } from './dto/find-products-by.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { PaginationQueryDto } from '../shared/dto/pagination-query.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }


  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@Body() createProductDto: CreateProductDto, @UploadedFile() file: Express.Multer.File,) {
    createProductDto.image = file.buffer;
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll(@Query() paginationQueryDto: PaginationQueryDto, @Query() findProductsByDto: FindProductsByDto) {
    return this.productsService.findAll(paginationQueryDto, findProductsByDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
