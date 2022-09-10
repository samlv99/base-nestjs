import { Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createConnection } from 'typeorm';
import config from './config';

const logger = new Logger('AppModule');

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => configService.get('database'),
      dataSourceFactory: async (options) => {
        try {
          const connection = await createConnection(options);
          logger.log('Mysql connect successfully!');
          return connection;
        } catch (error) {
          logger.error(error);
        }
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
