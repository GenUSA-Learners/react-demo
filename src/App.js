import { useState } from "react";
import TodoList from "./components/todo-list";
import NavBar from "./components/nav-bar";
import ToDoForm from "./components/to-do-form";

import "./App.css";
import { Container } from "react-bootstrap";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <NavBar />
      <Container className="d-flex justify-content-center my-5">
        <ToDoForm todos={todos} setTodos={setTodos} />
      </Container>
      {/* Pass down setTodos as a props argument so we can edit todos  */}
      <TodoList todos={todos} />
    </div>
  );
}

export default App;

