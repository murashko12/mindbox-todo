import { Todo } from '../../interfaces/Todo'
import { apiQuery } from '../api.query'

export const todosApi = apiQuery.injectEndpoints({
    endpoints: (builder) => ({
        getAllTodos: builder.query<Todo[], void>({
            query: () => '/todos', // Относительный путь от baseUrl
            providesTags: (result) => 
                result 
                    ? [...result.map(({ id }) => ({ type: 'TODO' as const, id })), 'TODO']
                    : ['TODO']
        }),

        getTodoById: builder.query<Todo, string>({
            query: (id) => `/todos/${id}`,
            // @ts-ignore
            providesTags: (result, error, id) => [{ type: 'TODO', id }]
        }),
        
        createTodo: builder.mutation<Todo, Omit<Todo, 'id' | 'completed'>>({
            query: (newTodo) => ({
                url: '/todos',
                method: 'POST',
                body: newTodo
            }),
            invalidatesTags: ['TODO']
        }),
        
        updateTodo: builder.mutation<Todo, { id: string; changes: Partial<Todo> }>({
            query: ({ id, changes }) => ({
                url: `/todos/${id}`,
                method: 'PUT',
                body: changes
            }),
            // @ts-ignore
            invalidatesTags: (result, error, { id }) => [{ type: 'TODO', id }]
        }),
        
        deleteTodo: builder.mutation<void, string>({
            query: (id) => ({
                url: `/todos/${id}`,
                method: 'DELETE'
            }),
            // @ts-ignore
            invalidatesTags: (result, error, id) => [{ type: 'TODO', id }]
        })
    }),
    
    overrideExisting: false
})

export const {
    useGetAllTodosQuery,
    useGetTodoByIdQuery,
    useCreateTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation
} = todosApi