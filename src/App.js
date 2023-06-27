import TodoList from "./components/todo-list";
import todos from "./todos.json";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;

