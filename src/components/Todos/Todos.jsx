import { Todo } from "../Todo/Todo"

export const Todos = ({todos, handleCompletedTodo,  handleDeleteTodo}) => {
  return (
    <ul className="w-full bg-primary rounded-md divide-y divide-quaternary mt-6">
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            handleCompletedTodo={handleCompletedTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        </li>
      ))}
    </ul>
  )
}