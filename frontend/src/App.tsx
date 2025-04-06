import './App.css'
import { useGetAllTodosQuery } from './store/todoApi'

function App() {
  const { data: todos, isLoading, error } = useGetAllTodosQuery()
  return (
    <>
      {JSON.stringify(todos)}
    </>
  )
}

export default App
