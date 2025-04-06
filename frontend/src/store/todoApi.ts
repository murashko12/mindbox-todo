import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Todo } from '../interfaces/Todo'; // Убедитесь, что у вас есть тип Todo

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:3000/todos', // Укажите ваш бэкенд URL
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  tagTypes: ['Todo'], // Для инвалидации кэша
  endpoints: (builder) => ({
    getAllTodos: builder.query<Todo[], void>({
      query: () => '/',
      providesTags: ['Todo'],
    }),
    getTodoById: builder.query<Todo, string>({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: 'Todo', id }],
    }),
    createTodo: builder.mutation<Todo, Omit<Todo, 'id' | 'completed'>>({
      query: (newTodo) => ({
        url: '/',
        method: 'POST',
        body: newTodo,
      }),
      invalidatesTags: ['Todo'],
    }),
    updateTodo: builder.mutation<Todo, { id: string; changes: Partial<Todo> }>({
      query: ({ id, changes }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: changes,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Todo', id }],
    }),
    deleteTodo: builder.mutation<void, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
});

export const {
  useGetAllTodosQuery,
  useGetTodoByIdQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todoApi;