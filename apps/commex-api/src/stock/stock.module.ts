import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../products/entities/product.entity';
import { Region } from '../regions/entities/region.entity';
import { Category } from '../categories/entities/category.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Product, Region, Category])],
  controllers: [StockController],
  providers: [StockService],
})
export class StockModule {}
