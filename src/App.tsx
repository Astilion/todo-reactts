import "./App.scss";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
function App() {
	const todos = [new Todo("Learn React"), new Todo("Learn Typescript")];

	const addTodoHandler = (todoText:string) => {
		
	}

	return (
		<>
			<NewTodo onAddTodo={addTodoHandler}/>
			<Todos items={todos} />
		</>
	);
}

export default App;
