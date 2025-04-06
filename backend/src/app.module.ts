import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { App1Controller } from './app1/app1.controller';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [TodoModule],
  controllers: [AppController, App1Controller, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
