import { Injectable } from '@nestjs/common';
import { CreateListUserDto } from './dto/create-list_user.dto';
import { UpdateListUserDto } from './dto/update-list_user.dto';

@Injectable()
export class ListUsersService {
  create(createListUserDto: CreateListUserDto) {
    return 'This action adds a new listUser';
  }

  findAll() {
    return `This action returns all listUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} listUser`;
  }

  update(id: number, updateListUserDto: UpdateListUserDto) {
    return `This action updates a #${id} listUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} listUser`;
  }
}
