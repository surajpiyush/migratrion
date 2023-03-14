import { Book } from 'src/book/entities/book.entity';
import { User } from 'src/user/entities/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mssql',
  host: 'localhost',
  username: 'piyush',
  password: 'Pibent123#',
  database: 'abc',
  entities: [User,Book],
  migrations:['dist/db/migrations/*.js'],
  port: 1433,
  synchronize: false,
  logging: true,
  extra: {
    trustServerCertificate: true,
    options: {
      encrypt: true,
      enableArithAbort: true,
    },
  },
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
