import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Настройка Swagger
  const config = new DocumentBuilder()
    .setTitle('Todo List API')
    .setDescription('API для управления задачами')
    .setVersion('1.0')
    .addTag('todos') // Опционально: добавляем теги для группировки методов
    .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document) // 'api' — путь к Swagger UI

  app.enableCors()

  await app.listen(3000)
}
bootstrap()