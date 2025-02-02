import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api/v1");
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Mi API')
    .setDescription('Descripción de mi API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  // Setup SwaggerUI
  SwaggerModule.setup('api/v1', app, document);
  await app.listen(3000);
}
bootstrap();
