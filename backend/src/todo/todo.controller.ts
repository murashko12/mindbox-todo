import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common'
import { TodoService } from './todo.service'
import { Todo } from './schemas/todo.schema'
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('todos')
@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  @ApiOperation({ summary: 'Получить все задачи' })
  @ApiResponse({ status: 200, description: 'Список всех задач', type: [Todo] })
  async findAll(): Promise<Todo[]> {
    return this.todoService.findAllTodos()
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получение задачи по ID' })
  @ApiParam({ name: 'id', description: 'ID задачи', type: String })
  @ApiResponse({ status: 200, description: 'Задача найдена', type: Todo })
  @ApiResponse({ status: 404, description: 'Задача не найдена' })
  async findOne(
    @Param('id') id: string
  ): Promise<Todo | null> {
    return this.todoService.findTodoById(id)
  }

  @Post()
  @ApiOperation({ summary: 'Создать новую задачу' })
  @ApiBody({ type: Todo, description: 'Данные о задаче' })
  @ApiResponse({ status: 201, description: 'Задача успешно создана', type: Todo })
  async create(
    @Body() todo: Omit<Todo, 'id' | 'completed'>
  ): Promise<Todo> {
    return this.todoService.createNewTodo(todo)
  }

  @Put(':id')
  @ApiOperation({ summary: 'Обновить задачу по ID' })
  @ApiParam({ name: 'id', description: 'ID задачи', type: String })
  @ApiBody({ type: Todo, description: 'Данные для обновления задачи' })
  @ApiResponse({ status: 200, description: 'Задача успешно обновлена', type: Todo })
  @ApiResponse({ status: 404, description: 'Задача не найдена' })
  async update(
    @Param('id') id: string, 
    @Body() updatedTodo: Partial<Todo>
  ): Promise<Todo | null> {
    return this.todoService.updateTodo(id, updatedTodo)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удалить задачу по ID' })
  @ApiParam({ name: 'id', description: 'ID задачи', type: String })
  @ApiResponse({ status: 200, description: 'Задача успешно удалена', type: Todo })
  @ApiResponse({ status: 404, description: 'Задача не найдена' })
  async delete(
    @Param('id') id: string
  ): Promise<void> {
    return this.todoService.deleteTodoById(id)
  }
}