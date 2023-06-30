import ListGroup from "react-bootstrap/ListGroup";
import { Button, Card, Container } from "react-bootstrap";

const TodoList = ({ todos }) => {
  return (
    <Card style={{ width: "fit-content", margin: "0 auto" }}>
      <ListGroup>
        {todos.map((todo) => (
          <ListGroup.Item
            className="text-light bg-dark d-flex justify-content-between align-items-center"
            key={todo.id}
          >
            <p className="pt-3" style={{ minWidth: "16rem" }}>
              {todo.id} - {todo.text}
            </p>
            <Container>
              <Button className="mx-1" variant="primary">
                Delete
              </Button>
              <Button className="mx-1" variant="danger">
                Mark As Done
              </Button>
            </Container>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default TodoList;
