import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListUsersService } from './list_users.service';
import { CreateListUserDto } from './dto/create-list_user.dto';
import { UpdateListUserDto } from './dto/update-list_user.dto';

@Controller('list-users')
export class ListUsersController {
  constructor(private readonly listUsersService: ListUsersService) {}

  @Post()
  create(@Body() createListUserDto: CreateListUserDto) {
    return this.listUsersService.create(createListUserDto);
  }

  @Get()
  findAll() {
    return this.listUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listUsersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListUserDto: UpdateListUserDto) {
    return this.listUsersService.update(+id, updateListUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listUsersService.remove(+id);
  }
}
