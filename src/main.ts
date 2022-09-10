import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('port');
  const appName = configService.get('appName');
  const environment = configService.get('environment');

  await app.listen(port);
  logger.log(`Nest server started on port "${port}". Environment "${environment}"`);
  logger.log(`---------------------------${appName}-----------------------------`);
}
bootstrap();
