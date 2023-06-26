const styles = {
  list: {
    listStyle: "none",
    margin: "0 auto",
    width: "fit - content",
    textAlign: "left",
  },
};

const TodoList = () => {
  return (
    <ul style={styles.list}>
      <li>Go to the grocery store</li>
      <li>Pickup dry cleaning</li>
    </ul>
  );
};

export default TodoList;
