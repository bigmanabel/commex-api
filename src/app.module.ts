import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { StockModule } from './stock/stock.module';
import { RegionsModule } from './regions/regions.module';

@Module({
  imports: [ProductsModule, CartModule, StockModule, RegionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
