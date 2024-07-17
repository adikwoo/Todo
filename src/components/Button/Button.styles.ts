import styled from "styled-components";
import { baseTheme } from "../../Styles/Theme";

export const ContainedButtonContainer = styled("div")`
  margin: 10px;
  .disabled {
    pointer-events: none;
    background: ${baseTheme.colors.disabled};
    border: 2px solid ${baseTheme.colors.disabled};
  }
  :hover {
    background: ${baseTheme.colors.focus};
    border-color: ${baseTheme.colors.focus};
  }
`;

export const ContainedLink = styled("div")`
  background: ${(props) => props.color ?? baseTheme.colors.mainLightBlue};
  width: fit-content;
  border-radius: 8px;
  border: 2px solid
    ${(props) =>
      props.color ? (props) => props.color : baseTheme.colors.mainLightBlue};
  padding: 10px 24px;
  color: ${baseTheme.colors.white};
  font-weight: 500;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
