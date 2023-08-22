import { Module } from '@nestjs/common';
import { ListProductsService } from './list_products.service';
import { ListProductsController } from './list_products.controller';

@Module({
  controllers: [ListProductsController],
  providers: [ListProductsService]
})
export class ListProductsModule {}
