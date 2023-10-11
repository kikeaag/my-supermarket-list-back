import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateListDto {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  name: string;
}
