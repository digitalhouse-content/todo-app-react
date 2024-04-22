import {useState} from "react";
import { Header } from './components/Header/Header';

const MOCK_TODOS = [
	{
		id: 1,
		title: "Diseño Web: HTML y CSS",
		completed: false,
	},
	{
		id: 2,
		title: "Redux con Typescript",
		completed: false,
	},
	{
		id: 3,
		title: "JavaScript para DOM",
		completed: false,
	},
];

function App() {
	const [todos, setTodos] = useState(MOCK_TODOS);

	return (
		<main className="min-h-screen w-full bg-secondary relative">
      {/* Toaster */}
      <Header />
      <div className="w-11/12 lg:max-w-xl absolute top-32 left-1/2 transform -translate-x-1/2 bg-red-700">
        {/* Form */}
        {/* Todos */}
        {JSON.stringify(todos, null, 2)}
      </div>
		</main>
	);
}

export default App;
