import { FC } from "react"
import { Todo } from "../interfaces/Todo"
import TodoItem from "./TodoItem"

interface ITodoContainerProps {
    todos?: Todo[]
}

const TodoContainer:FC<ITodoContainerProps> = ({todos}) => {
    if (!todos) return <div>Loading...</div>
    return (
        <ul className="bg-green-500 w-[400px] h-[300px] flex flex-col gap-2 p-2">
            {todos.map((todo: Todo) => <TodoItem todo={todo} />)}
        </ul>
    )
}

export default TodoContainer
