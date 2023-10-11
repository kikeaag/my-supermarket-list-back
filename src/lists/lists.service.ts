import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { List } from './entities/list.entity';
import { Repository } from 'typeorm';
import { ListProductDetail } from 'src/list_product_details/entities/list_product_detail.entity';

@Injectable()
export class ListsService {
  constructor(
    @InjectRepository(List)
    private readonly listRepository: Repository<List>,
    @InjectRepository(ListProductDetail)
    private readonly listProductDetailRepository: Repository<ListProductDetail>,
  ) {}

  async create(createListDto: CreateListDto) {
    try {
      const list = this.listRepository.create(createListDto);
      await this.listRepository.save(list);

      return list;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('create list error');
    }
  }

  findAll() {
    return this.listRepository.find({
      relations: {
        listProductDetails: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} list`;
  }

  async update(id: string, updateListDto: UpdateListDto) {
    const list = await this.listRepository.preload({
      id,
      name: updateListDto.name,
    });

    if (!list) throw new NotFoundException(`list ${id} not found`);

    return this.listRepository.save(list);
  }

  async remove(id: string) {
    const [list] = await this.listRepository.find({
      where: { id },
      relations: { listProductDetails: true },
    });

    if (!list) throw new NotFoundException(`List ${id} not found`);

    list.listProductDetails.map((detail) =>
      this.listProductDetailRepository.remove(detail),
    );

    return this.listRepository.remove(list);
  }
}
