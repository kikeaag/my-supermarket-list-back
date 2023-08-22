import { Module } from '@nestjs/common';
import { ListUsersService } from './list_users.service';
import { ListUsersController } from './list_users.controller';

@Module({
  controllers: [ListUsersController],
  providers: [ListUsersService]
})
export class ListUsersModule {}
