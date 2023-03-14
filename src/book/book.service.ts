import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(@InjectRepository(Book) private readonly bookRepository:Repository<Book>,){}
  create(createBookDto: CreateBookDto) {
let book:Book=new Book()
book.author=createBookDto.author;
book.isPublished=createBookDto.isPublished;
book.country=createBookDto.country

    return this.bookRepository.save(book)
  }

  findAll():Promise<Book[]> {
    return this.bookRepository.find()
  }

  findOne(id: number):Promise<Book> {
    return this.bookRepository.findOne({
      where:{
        bookId:id
      }
    })
  }

  update(id: number, updateBookDto: UpdateBookDto) {
let book:Book=new Book()
book.author=updateBookDto.author;
book.isPublished=updateBookDto.isPublished;
book.country=updateBookDto.country;
book.bookId=id

    return this.bookRepository.save(book)
   }

  remove(id: number) {
    return this.bookRepository.delete(id)
  }
}
