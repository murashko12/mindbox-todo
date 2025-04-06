import './App.css'
import { useGetAllTodosQuery } from './store/query/todos'

function App() {
  const { data: todos, isLoading, error } = useGetAllTodosQuery()
  console.log("->", todos);
  
  return (
    <>
      {JSON.stringify(todos)}
    </>
  )
}

export default App
