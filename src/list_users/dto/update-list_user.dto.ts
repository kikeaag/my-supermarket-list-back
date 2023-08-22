import { PartialType } from '@nestjs/mapped-types';
import { CreateListUserDto } from './create-list_user.dto';

export class UpdateListUserDto extends PartialType(CreateListUserDto) {}
