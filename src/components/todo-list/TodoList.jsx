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
    <ul style={styles.list}>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.id} - {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
