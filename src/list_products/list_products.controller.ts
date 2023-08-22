import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListProductsService } from './list_products.service';
import { CreateListProductDto } from './dto/create-list_product.dto';
import { UpdateListProductDto } from './dto/update-list_product.dto';

@Controller('list-products')
export class ListProductsController {
  constructor(private readonly listProductsService: ListProductsService) {}

  @Post()
  create(@Body() createListProductDto: CreateListProductDto) {
    return this.listProductsService.create(createListProductDto);
  }

  @Get()
  findAll() {
    return this.listProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listProductsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListProductDto: UpdateListProductDto) {
    return this.listProductsService.update(+id, updateListProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listProductsService.remove(+id);
  }
}
