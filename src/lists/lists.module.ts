import { Module } from '@nestjs/common';
import { ListsService } from './lists.service';
import { ListsController } from './lists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { List } from './entities/list.entity';
import { ListProductDetail } from 'src/list_product_details/entities/list_product_detail.entity';

@Module({
  controllers: [ListsController],
  providers: [ListsService],
  imports: [TypeOrmModule.forFeature([List, ListProductDetail])],
})
export class ListsModule {}
