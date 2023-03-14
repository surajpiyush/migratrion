import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  bookId: number;

  @Column()
  author: string;

  @Column()
  isPublished: boolean;

  @Column()
  country: string;
}
