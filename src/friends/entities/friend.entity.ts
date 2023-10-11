import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Friend {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int')
  userId: number;

  @Column('int')
  userFriendId: number;
}
