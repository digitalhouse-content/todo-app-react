import {Button} from "../common/Button/Button";
import {TodoItem} from "../common/TodoItem/TodoItem";

export const Todo = ({
	id,
	title,
	completed,
	handleCompletedTodo,
	handleDeleteTodo,
}) => {
	return (
		<div className='px-6 h-16 flex items-center justify-between'>
			<div className='flex items-center gap-x-3'>
				<TodoItem
					id={id}
					title={title}
					completed={completed}
					handleCompletedTodo={handleCompletedTodo}
				/>
			</div>

			<Button id={id} handleDeleteTodo={handleDeleteTodo} />
		</div>
	);
};
