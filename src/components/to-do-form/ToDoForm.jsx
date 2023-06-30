import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ToDoForm = (props) => {
  const [todoInput, setTodoInput] = useState("");

  const handleInputChange = (event) => {
    const input = event.target.value;
    setTodoInput(input);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const todo = { id: props.todos.length + 1, text: todoInput, done: false };
    props.setTodos([...props.todos, todo]);
    setTodoInput("");
  };

  return (
    <Form style={{ width: "18rem" }} onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>To-Do</Form.Label>
        <Form.Control
          type="text"
          placeholder="What do you need to do?"
          value={todoInput}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ToDoForm;
