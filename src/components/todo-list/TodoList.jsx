import { useCallback, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button, Card, Container } from 'react-bootstrap';

const TodoList = ({ todos, setTodos }) => {
  // Create 2 functional expressions that will handle delete and mark as done

  useEffect(() => {
    alert(`Your todo list has ${todos.length} todos`);
  }, [todos]);
  // Handle delete will create a copy of todos, remove the selected one by id,
  // and setTodos with the new array copy minus the deleted one.
  const deleteTodo = useCallback(
    (id) => {
      const copyOfTodos = [...todos];
      var filtered = copyOfTodos.filter((todo) => {
        return todo.id !== id;
      });
      setTodos(filtered);
    },
    [todos]
  );

  // Handle mark as done will create a copy of todos, loop thru and find the
  // todo by id, assign true to its done property, and setTodos with the new
  // array copy including the edited one.
  const markAsDone = useCallback(
    (id) => {
      const copyOfTodos = [...todos];
      var edited = copyOfTodos.map((todo) => {
        if (todo.id === id) {
          todo.done = true;
        }
        return todo;
      });
      setTodos(edited);
    },
    [todos]
  );

  return (
    <Card style={{ width: 'fit-content', margin: '0 auto' }}>
      <ListGroup>
        {todos.map((todo) => (
          <ListGroup.Item
            className="text-light bg-dark d-flex justify-content-between align-items-center"
            key={todo.id}
          >
            <p className="pt-3" style={{ minWidth: '16rem' }}>
              {todo.id} - {todo.text}
            </p>
            <Container className="d-flex justify-content-end">
              {/* Add onClick handlers for deleting and mark as done operations */}
              <Button
                className={`mx-1 ${todo.done ? 'hidden' : ''}`}
                variant="danger"
                onClick={() => markAsDone(todo.id)}
              >
                Mark As Done
              </Button>
              <Button
                className="mx-1"
                variant="primary"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </Button>
            </Container>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default TodoList;
