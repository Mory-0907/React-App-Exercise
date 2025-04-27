import { TodoList } from "./TodoList";

function App() {
  const todos = [""];
  return (
    <>
      <TodoList list={todos} />
    </>
  );
}

export default App;
