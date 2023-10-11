import { PartialType } from '@nestjs/mapped-types';
import { CreateListProductDetailDto } from './create-list_product_detail.dto';

export class UpdateListProductDetailDto extends PartialType(CreateListProductDetailDto) {}
