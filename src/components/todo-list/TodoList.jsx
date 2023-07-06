import ListGroup from "react-bootstrap/ListGroup";
import { Button, Card, Container } from "react-bootstrap";

const TodoList = (props) => {
  // Create 2 functional expressions that will handle delete and mark as done


  // Handle delete will create a copy of todos, remove the selected one by id,
  // and setTodos with the new array copy minus the deleted ones.
const handleDeleteTodo = (id) => {
  const copyOfTodos = [...props.todos];
  const newTodos = copyOfTodos.filter((todo) => todo.id !== id);
  props.setTodos(newTodos);
}
  // Handle mark as done will create a copy of todos, loop thru and find the
  // todo by id, assign true to its done property, and setTodos with the new
  // array copy including the edited one.
 const handleDoneTodo = (id) => {
  const copyOfTodos = [...props.todos];
    const newTodos = copyOfTodos.map(todo => {
     if(todo.id === id) {
        todo.done = true;
     };
     return todo;
 })
    props.setTodos(newTodos);
 }

  return (
    <Card style={{ width: "fit-content", margin: "0 auto" }}>
      <ListGroup>
        {props.todos.map((todo) => (
          <ListGroup.Item
            className="text-light bg-dark d-flex justify-content-between align-items-center"
            key={todo.id}
          >
            <p className="pt-3" style={{ minWidth: "16rem" }}>
              {todo.id} - {todo.text}
            </p>
            <Container>
              {/* Add onClick handlers for deleting and mark as done operations */}
              <Button className="mx-1" variant="primary" onClick={() => handleDeleteTodo(todo.id)}>
                Delete
              </Button>
              {!todo.done && <Button className="mx-1" variant="danger" onClick={() => handleDoneTodo(todo.id)} >
                Mark As Done
              </Button>}
            </Container>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default TodoList;
