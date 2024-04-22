export const TodoItem = ({handleCompletedTodo, title, completed, id}) => {
	return (
		<>
			<input
				type="checkbox"
				name="todo"
				id="todo"
				checked={completed}
				onChange={() => handleCompletedTodo(id)}
				className="w-6 h-6 cursor-pointer accent-secondary"
			/>
			<label
				className={`text-tertiary ${completed ? "line-through" : ""}`}
				htmlFor="todo"
			>
				{title}
			</label>
		</>
	);
};
