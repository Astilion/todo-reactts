import Todo from "../models/todo";
import TodoItem from "./TodoItem";
type Props = {
	items: Todo[];
};

const Todos = (props: Props) => {
    return (
      <ul>
        {props.items.map((item) => (
          <TodoItem key={item.id} text={item.text} />
        ))}
      </ul>
    );
  };

export default Todos;
