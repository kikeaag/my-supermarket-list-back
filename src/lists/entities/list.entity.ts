import { Entity } from 'typeorm';

@Entity()
export class List {
  id: string;
  name: string;
}
