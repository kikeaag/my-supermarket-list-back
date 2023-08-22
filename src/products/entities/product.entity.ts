import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column('text') name: string;
  @Column('text', { unique: true, nullable: true }) barcode: string;
  @Column('float') price: number;
  @Column('text', { unique: true, nullable: false }) slug: string;

  @BeforeInsert()
  checkSlugInsert() {
    this.slug = this.name
      .toLowerCase()
      .replaceAll(' ', '_')
      .replaceAll("'", '');
  }
}
