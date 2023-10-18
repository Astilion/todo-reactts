import "./App.scss";
import { useState } from 'react'
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
function App() {
	const [todos, setTodos] = useState<Todo[]>([])

	const addTodoHandler = (todoText:string) => {
		const newTodo = new Todo(todoText);
		setTodos((prevTodos) => {
			return prevTodos.concat(newTodo)
		})
	}

	return (
		<>
			<NewTodo onAddTodo={addTodoHandler}/>
			<Todos items={todos} />
		</>
	);
}

export default App;
