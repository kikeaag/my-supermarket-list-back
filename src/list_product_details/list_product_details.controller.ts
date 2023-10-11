import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ListProductDetailsService } from './list_product_details.service';
import { CreateListProductDetailDto } from './dto/create-list_product_detail.dto';
import { UpdateListProductDetailDto } from './dto/update-list_product_detail.dto';

@Controller('list-product-details')
export class ListProductDetailsController {
  constructor(
    private readonly listProductDetailsService: ListProductDetailsService,
  ) {}

  @Post(':listId')
  create(
    @Param('listId', ParseUUIDPipe)
    id: string,
    @Body()
    createListProductDetailDto: CreateListProductDetailDto,
  ) {
    return this.listProductDetailsService.create(
      id,
      createListProductDetailDto,
    );
  }

  @Get()
  findAll() {
    return this.listProductDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.listProductDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateListProductDetailDto: UpdateListProductDetailDto,
  ) {
    return this.listProductDetailsService.update(
      id,
      updateListProductDetailDto,
    );
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.listProductDetailsService.remove(id);
  }
}
