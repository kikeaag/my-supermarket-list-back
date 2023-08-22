import { Injectable } from '@nestjs/common';
import { CreateListProductDto } from './dto/create-list_product.dto';
import { UpdateListProductDto } from './dto/update-list_product.dto';

@Injectable()
export class ListProductsService {
  create(createListProductDto: CreateListProductDto) {
    return 'This action adds a new listProduct';
  }

  findAll() {
    return `This action returns all listProducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} listProduct`;
  }

  update(id: number, updateListProductDto: UpdateListProductDto) {
    return `This action updates a #${id} listProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} listProduct`;
  }
}
