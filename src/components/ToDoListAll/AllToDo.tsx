import { useSelector } from "react-redux";
import TodoListItem from "../ToDoListItem/TodoListItem";
import * as Styled from "./AllToDo.styled"

const AllToDo = () => {
  const todos = useSelector((state: any) => state.todos.todos);
  console.log(todos);
  
  return (
    <Styled.TodoListContainer>
      {todos.map((todo: any) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </Styled.TodoListContainer>
  );
};

export default AllToDo;
