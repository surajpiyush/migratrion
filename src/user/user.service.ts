import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  create(createUserDto: CreateUserDto) {
    let user: User = new User();
    user.name = createUserDto.name;
    user.age = createUserDto.age;
    user.city = createUserDto.city;
    user.state=createUserDto.state;
    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    let user: User = new User();
    user.name = updateUserDto.name;
    user.age = updateUserDto.age;
    user.city = updateUserDto.city;
    user.state=updateUserDto.state;
    user.id = id;
    return this.userRepository.save(user);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }

getRelation(userId:number):Promise<User[]>{
  try {
    return this.userRepository.find({
      where:{id:userId},
      relations:['book']
    })
    
  } catch (error) {
    return error
  }
}


}
