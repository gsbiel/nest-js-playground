import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {CategoryModule} from './category.module';
import "reflect-metadata";

async function bootstrap() {
  const app = await NestFactory.create(CategoryModule);
  await app.listen(3003);
}
bootstrap();
