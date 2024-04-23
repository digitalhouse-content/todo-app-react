import {useEffect, useState} from "react";
import { Header } from './components/Header/Header';
import { Form } from "./components/Form";
import { Todos } from "./components/Todos";
import { addTodo, deleteTodo, getTodos, updateTodo } from "./services/http";
import { Toaster, toast } from "sonner";


function App() {
	const [todos, setTodos] = useState([]);

	const handleAddTodo = async (title) => {
		const newTodo = {
			title,
			completed: false,
		}

		const addedTodo = await addTodo(newTodo)
		setTodos([...todos, addedTodo])
		toast.success("Todo agregado correctamente")
	}

	const handleCompletedTodo = async(id) => {
		const newsTodos = todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					completed: !todo.completed,
				}
			}

			return todo
		})

		const todoChanged = newsTodos.find((todo) => todo.id === id)
		await updateTodo(todoChanged)
		setTodos(newsTodos)
		toast.success("Todo actualizado correctamente")
	}

	const handleDeleteTodo = async(id) => {
		const newsTodos = todos.filter((todo) => todo.id !== id)

		setTodos(newsTodos)
		await deleteTodo(id)
		toast.error("Todo eliminado correctamente")

	}

	useEffect(() => {
		getTodos().then((data) => setTodos(data))
	}, []) 

	return (
		<main className="min-h-screen w-full bg-secondary relative">
      <Toaster richColors visibleToasts={1}/>
      <Header />
      <div className="w-11/12 lg:max-w-xl absolute top-32 left-1/2 transform -translate-x-1/2">
				<Form
					handleAddTodo={handleAddTodo}
				/>
				<Todos
					todos={todos}
					handleCompletedTodo={handleCompletedTodo}
					handleDeleteTodo={handleDeleteTodo}
				/>
      </div>
		</main>
	);
}

export default App;
