import { FC } from "react"
import { Todo } from "../interfaces/Todo"

interface ITodoItemProps {
    todo: Todo
}

const TodoItem:FC<ITodoItemProps> = ({todo}) => {
    return (
        <li className="p-2 bg-white rounded shadow">
            {todo.title}
            {todo.completed && " ✓"}
        </li>
    )
}

export default TodoItem
