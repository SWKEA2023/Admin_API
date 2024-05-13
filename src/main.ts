import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

function setupSwagger(app: INestApplication): void {
  const documentBuilder = new DocumentBuilder()
    .setTitle('Admin API')
    .setDescription(
      'This is an API for the admin module of the cinema application.',
    )
    .setVersion('1.0')
    .addBasicAuth()
    .build();
  const document = SwaggerModule.createDocument(app, documentBuilder);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: { defaultModelsExpandDepth: -1 },
  });
}

async function bootstrap() {
  const configService = new ConfigService();

  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [configService.get('RMQ_URL') as string],
      queue: configService.get('RMQ_QUEUE_CONSUME'),
      queueOptions: {
        durable: true,
      },
    },
  });

  setupSwagger(app);
  await app.listen(3000);
  await app.startAllMicroservices();
}

bootstrap();
