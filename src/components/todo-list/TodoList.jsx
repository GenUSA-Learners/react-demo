import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
const styles = {
  list: {
    listStyle: "none",
    margin: "0 auto",
    padding: 0,
    width: "fit-content",
    textAlign: "left",
  },
};

const TodoList = ({ todos }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <ListGroup>
        {todos.map((todo) => (
          <ListGroup.Item className ="text-light bg-dark"key={todo.id}>
            {todo.id} - {todo.text}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default TodoList;
