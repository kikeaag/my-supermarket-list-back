import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid') id: number;
  @Column('text', { unique: true }) name: string;
  @Column('text', { unique: true }) barcode: string;
  @Column('numeric') price: number;
  @Column('text', { unique: true }) slug: string;
}
