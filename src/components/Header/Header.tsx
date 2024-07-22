import { useState } from "react";
import Button from "../Button";
import * as Styled from "./Header.styles";
import ModalWindow from "../ModalWindow";
import TodoList from "../ToDoList";
interface HeaderProps {
  color?: string;
  onClick: () => void;

}

const Header: React.FC<HeaderProps> = ({ color, onClick }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  console.log("isOpenModal", isOpenModal);

  return (
    <Styled.HeaderContainer color={color}>
      <Button onClick={() => setIsOpenModal(!isOpenModal)} text="Add ToDo" />
      <Button onClick={onClick} text="Instructions" />

      {isOpenModal && (
        <ModalWindow onClose={() => setIsOpenModal(!isOpenModal)}>
          <TodoList onClose={() => setIsOpenModal(!isOpenModal)} />
        </ModalWindow>
      )}
    </Styled.HeaderContainer>
  );
};

export default Header;
