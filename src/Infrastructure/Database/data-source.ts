import { ConfigService } from '@nestjs/config';
import { Customer } from 'src/Domain/Entities/Customer';
import { Hall } from 'src/Domain/Entities/Hall';
import { Movie } from 'src/Domain/Entities/Movie';
import { Order } from 'src/Domain/Entities/Order';
import { Product } from 'src/Domain/Entities/Product';
import { Screening } from 'src/Domain/Entities/Screening';
import { Seat } from 'src/Domain/Entities/Seat';
import { Ticket } from 'src/Domain/Entities/Ticket';
import { DataSourceOptions } from 'typeorm';

const configService: ConfigService = new ConfigService();

export const dataSource: DataSourceOptions = {
  type: 'mysql',
  host: configService.get<string>('DB_HOST'),
  port: configService.get<number>('DB_DBPORT'),
  username: configService.get<string>('DB_USERNAME'),
  password: configService.get<string>('DB_PASSWORD'),
  database: configService.get<string>('DB_DATABASE'),
  entities: [Movie, Hall, Customer, Seat, Screening, Ticket, Order, Product],
  synchronize: false,
};
