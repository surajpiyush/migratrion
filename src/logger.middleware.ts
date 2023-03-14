import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
// this is class based middleware  we also have to import in the module in which module we wanna use
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    let proto=req.protocol;
    let host=req.get('host');
    let url=req.originalUrl;
    let method=req.method
  let date=new Date().toDateString()
  console.log(proto+"//:"+host+":"+url +"  "+method);
    console.log(proto,host,url,date,method);
    next();
  }
}
