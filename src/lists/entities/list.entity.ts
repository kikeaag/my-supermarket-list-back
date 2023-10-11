import { ListProductDetail } from 'src/list_product_details/entities/list_product_detail.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class List {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column('text') name: string;
  @Column('text', { default: 'to-do' }) status: string;

  @Column('date')
  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(
    () => ListProductDetail,
    (listProductDetail) => listProductDetail.list,
    { cascade: true },
  )
  listProductDetails: ListProductDetail[];
}
