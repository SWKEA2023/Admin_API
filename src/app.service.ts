import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(process.env.HELLO_WORLD);
    return 'Hello World!';
  }
}
