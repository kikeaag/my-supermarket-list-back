import { List } from 'src/lists/entities/list.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class ListProductDetail {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column('text') productName: string;
  @Column('float', { default: 1 }) price: number;
  @Column('int', { default: 1 }) quantity: number;

  @ManyToOne(() => List, (list) => list.listProductDetails)
  list: List;
}
