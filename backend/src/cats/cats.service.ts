import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private readonly cats: string[] = ['Мурзик', 'Барсик', 'Васька'];

  findAll(): string[] {
    return this.cats;
  }
}