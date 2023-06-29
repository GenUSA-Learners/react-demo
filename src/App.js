import TodoList from "./components/todo-list";
import NavBar from "./components/nav-bar";
import ToDoForm from "./components/to-do-form";
import todos from "./todos.json";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>ToDo List</h1>
      <ToDoForm></ToDoForm>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;

