import styled from "styled-components";
import { baseTheme } from "../../Styles/Theme";

export const TodoListContainer = styled("li")`
  padding: 12px 16px; /* Отступы внутри элемента списка */
  margin: 10px;
  background-color: ${baseTheme.colors.grey};
  font-size: 16px;
  color: ${baseTheme.colors.primary};
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  flex-direction: row;
  box-shadow: 0 4px 8px rgb(49 247 15 / 40%);

  &:hover {
    background-color: ${baseTheme.colors.focus};
  }
`;

export const Checkbox = styled("input")`
  accent-color: #4caf50;
  margin-right: 12px;
`;

export const TodoText = styled("div")<{ completed: boolean }>`
  flex: 1;
  font-size: 16px;
  color: #333;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  overflow: hidden;
  margin: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CloseButton = styled("img")`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
