import TodoContainer from './components/TodoContainer'
import { useGetAllTodosQuery } from './store/query/todos'

function App() {
  const { data: todos, isLoading, error } = useGetAllTodosQuery()
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading todos</div>
  return (
    <>
      {todos && <TodoContainer todos={todos}/>}
    </>
  )
}

export default App
