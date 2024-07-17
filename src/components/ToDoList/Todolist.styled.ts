import styled from "styled-components";
import { baseTheme } from "../../Styles/Theme";

export const TodoContainer = styled("div")`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const TodoInput = styled("input")`
  padding: 10px 15px;
  width: 100%;
  max-width: 400px;
  border: 2px solid ${baseTheme.colors.grey};
  border-radius: 5px;
  font-size: 16px;
  color: ${baseTheme.colors.primary};
  background-color: ${baseTheme.colors.background};
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: ${baseTheme.colors.focus};
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    outline: none;
  }
     &::placeholder {
    color: ${baseTheme.colors.secondary};
  }
`;
