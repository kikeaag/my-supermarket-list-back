import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateListProductDetailDto } from './dto/create-list_product_detail.dto';
import { UpdateListProductDetailDto } from './dto/update-list_product_detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ListProductDetail } from './entities/list_product_detail.entity';
import { List } from 'src/lists/entities/list.entity';

@Injectable()
export class ListProductDetailsService {
  constructor(
    @InjectRepository(List)
    private readonly listRepository: Repository<List>,
    @InjectRepository(ListProductDetail)
    private readonly listProductDetailRepository: Repository<ListProductDetail>,
  ) {}
  async create(
    listId: string,
    createListProductDetailDto: CreateListProductDetailDto,
  ) {
    // Se debe de buscar el list
    const list = await this.listRepository.findOneBy({ id: listId });

    // Se crea list product details
    const listProductDetail = this.listProductDetailRepository.create(
      createListProductDetailDto,
    );

    listProductDetail.list = list;

    await this.listProductDetailRepository.save(listProductDetail);
    return listProductDetail;
  }

  findAll() {
    return this.listProductDetailRepository.find();
    return `This action returns all listProductDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} listProductDetail`;
  }

  async update(
    id: string,
    updateListProductDetailDto: UpdateListProductDetailDto,
  ) {
    const listProductDetail = await this.listProductDetailRepository.preload({
      id,
      ...updateListProductDetailDto,
    });

    if (!listProductDetail)
      throw new NotFoundException(`list product detail ${id} not found`);

    return this.listProductDetailRepository.save(listProductDetail);
    return `This action updates a #${id} listProductDetail`;
  }

  async remove(id: string) {
    const listProductDetail = await this.listProductDetailRepository.findOneBy({
      id,
    });

    if (!listProductDetail) {
      throw new NotFoundException(`id: ${id} not found`);
    }
    return this.listProductDetailRepository.remove(listProductDetail);
  }
}
