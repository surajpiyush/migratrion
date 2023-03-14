
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import 'reflect-metadata';
import {Request,Response, NextFunction } from 'express';

// this is globalmiddleware
function globalMiddlewareOne(req:Request, res:Response, next:NextFunction  ){
console.log('this is global middlewareOne');
next()

}

function globalMiddlewareTwo(req:Request, res:Response, next:NextFunction  ){
  console.log('this is global middlewareTwo');
  next()
  
  }

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
// this is way to use globalmiddleware

  app.use(globalMiddlewareOne)
  app.use(globalMiddlewareTwo)
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3300);
}
bootstrap();
