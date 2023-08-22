import {
  IsString,
  MinLength,
  IsNumber,
  IsPositive,
  IsOptional,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  @MinLength(3)
  @IsOptional()
  barcode?: string;

  @IsNumber()
  @IsPositive()
  price: number;

  slug: string;
}
