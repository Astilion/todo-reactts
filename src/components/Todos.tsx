import Todo from "../models/todo";
import styles from "./Todos.module.scss";
import TodoItem from "./TodoItem";
type Props = {
	items: Todo[];
	onRemoveTodo: (id: string) => void;
};

const Todos = (props: Props) => {
	return (
		<ul className={styles.todos}>
			{props.items.map(item => (
				<TodoItem
					onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
					key={item.id}
					text={item.text}
				/>
			))}
		</ul>
	);
};

export default Todos;
