import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // npm i class-validator class-transformer
  app.useGlobalPipes(
    new ValidationPipe({
      // ignores not allowed fields/methods
      whitelist: true,
      // does not allow post with not listed methods
      forbidNonWhitelisted: true,
      // converts field types from requests
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
