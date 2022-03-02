import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // npm i class-validator class-transformer
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
