import styles from "./TodoItem.module.scss";
type Props = {
	text: string;
	onRemoveTodo: () => void;
};

const TodoItem = (props: Props) => {
	return (
		<li onClick={props.onRemoveTodo} className={styles.item}>
			{props.text}
		</li>
	);
};

export default TodoItem;
