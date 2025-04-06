import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Todo } from './schemas/todo.schema'

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}

  async findAllTodos(): Promise<Todo[]> {
    return this.todoModel.find().exec()
  }

  async findTodoById(id: string): Promise<Todo | null> {
    return this.todoModel.findById(id).exec()
  }

  async createNewTodo(todo: Omit<Todo, 'id' | 'completed'>): Promise<Todo> {
    const newTodo = new this.todoModel({
      ...todo,
      completed: false
    })
    return newTodo.save()
  }

  async updateTodo(id: string, updatedTodo: Partial<Todo>): Promise<Todo | null> {
    return this.todoModel
      .findByIdAndUpdate(id, updatedTodo, { new: true })
      .exec()
  }

  async deleteTodoById(id: string): Promise<void> {
    await this.todoModel.findByIdAndDelete(id).exec()
  }
}