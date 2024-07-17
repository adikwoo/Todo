import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../actions/todoActions";
import * as Styled from "./Todolist.styled";
import Button from "../Button/Button";
interface TodoListProps {
  onClose: () => void;
}
const TodoList: React.FC<TodoListProps> = ({ onClose }) => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setNewTodo(value);
    }
  };

  return (
    <Styled.TodoContainer>
      <>
        <Styled.TodoInput
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Enter your todo..."
        />
        <Button
          text="Add Todo"
          onClick={() => {
            handleAddTodo();
            onClose();
            console.log("aaaa");
          }}
        />
      </>
    </Styled.TodoContainer>
  );
};

export default TodoList;
