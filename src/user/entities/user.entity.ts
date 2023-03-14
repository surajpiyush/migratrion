import { Book } from "src/book/entities/book.entity";
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";

@Entity()
export class User {

@PrimaryGeneratedColumn()
id:number;

@Column()
name:string;

@Column()
age:number;

@Column()
city:string;

@Column()
state:string;

@OneToOne(() => Book)
    @JoinColumn()
    book: Book


}
