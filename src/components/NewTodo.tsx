import { useRef } from "react";
import styles from "./NewTodo.module.scss";

type NewTodoProps = {
	onAddTodo: (text: string) => void;
};
const NewTodo = (props: NewTodoProps) => {
	const todoTextInputRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const enteredText = todoTextInputRef.current!.value;

		if (enteredText.trim().length === 0) {
			return;
		}
		props.onAddTodo(enteredText);
	};
	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<label htmlFor='text'>Todo text</label>
			<input type='text' id='text' ref={todoTextInputRef} />
			<button>Add Todo</button>
		</form>
	);
};

export default NewTodo;
