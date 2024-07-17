import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../../actions/todoActions";
import { Todo } from "../../reducers/todoReducer";
import close from "../../../public/close-dark.svg";
import * as Styled from "./TodoListItem.styled";

interface Props {
  todo: Todo;
}

const TodoListItem: React.FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggleTodo = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <Styled.TodoListContainer>
      <Styled.Checkbox
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleTodo}
      />
      <Styled.TodoText completed={todo.completed}>
        {todo.text}
      </Styled.TodoText>
      <Styled.CloseButton src={close} alt="close" onClick={handleDeleteTodo} />
    </Styled.TodoListContainer>
  );
};

export default TodoListItem;
