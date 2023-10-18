import Todo from "../models/todo";
import styles from './Todos.module.scss'
import TodoItem from "./TodoItem";
type Props = {
	items: Todo[];
};

const Todos = (props: Props) => {
    return (
      <ul className={styles.todos}>
        {props.items.map((item) => (
          <TodoItem key={item.id} text={item.text} />
        ))}
      </ul>
    );
  };

export default Todos;
