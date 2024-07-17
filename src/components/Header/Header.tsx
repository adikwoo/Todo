import { useState } from "react";
import Button from "../Button/Button";
import * as Styled from "./Header.styles";
import ModalWindow from "../ModalWindow";
import TodoList from "../ToDoList/Todolist";

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  console.log("isOpenModal", isOpenModal);

  return (
    <Styled.HeaderContainer>
      <Button onClick={() => setIsOpenModal(!isOpenModal)} text="Add ToDo" />
      {isOpenModal && (
        <ModalWindow onClose={() => setIsOpenModal(!isOpenModal)}>
          <TodoList onClose={() => setIsOpenModal(!isOpenModal)} />
        </ModalWindow>
      )}
    </Styled.HeaderContainer>
  );
};

export default Header;
