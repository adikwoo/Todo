import styled from "styled-components";
import { baseTheme } from "../../Styles/Theme";

export const HeaderContainer = styled("div")`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  border: 2px solid
    ${(props) =>
      props.color ? (props) => props.color : baseTheme.colors.focusLight};
  background: ${(props) => props.color ?? baseTheme.colors.focusLight};
`;
