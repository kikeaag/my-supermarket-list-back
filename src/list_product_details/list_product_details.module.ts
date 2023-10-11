import { Module } from '@nestjs/common';
import { ListProductDetailsService } from './list_product_details.service';
import { ListProductDetailsController } from './list_product_details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListProductDetail } from './entities/list_product_detail.entity';
import { List } from 'src/lists/entities/list.entity';

@Module({
  controllers: [ListProductDetailsController],
  providers: [ListProductDetailsService],
  imports: [TypeOrmModule.forFeature([ListProductDetail, List])],
})
export class ListProductDetailsModule {}
