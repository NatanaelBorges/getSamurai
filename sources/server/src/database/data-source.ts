import 'dotenv/config';
import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    migrationsRun: true,
    logging: false,
    entities: [
        'src/database/entities/*{.ts,.js}'
    ],
    migrations: [
      'src/database/migrations/*{.ts,.js}'
    ],
    subscribers: [],
});

AppDataSource.initialize()
    .then(() => {
      console.log('Database connected')
    })
    .catch((error) => console.error('Database not connected', error));