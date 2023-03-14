import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { dataSourceOptions } from 'db/datasource';
import { BookModule } from './book/book.module';
import { LoggerMiddleware } from './logger.middleware';



@Module({
  // this is the way to use datasourceoption all the coonection written in datasourc file it allow us to write migration
  imports: [TypeOrmModule.forRoot(dataSourceOptions), UserModule, BookModule],
  controllers: [AppController],
  providers: [AppService,LoggerMiddleware],
})

// this is the way to use class based middleware

export class AppModule implements NestModule {
configure(consumer: MiddlewareConsumer) {
  // decide path & which method we wanna use
  consumer.apply(LoggerMiddleware).forRoutes({path:'*',method:RequestMethod.ALL  } )
}

}
